# Beer Challenge Back

This project is a **NestJS backend** designed with a layered architecture, where each flow is modularized.  
Two main flows are currently implemented:

- **Products**
- **Stock Price**

Each flow has its own `module`, keeping the design clean and extensible.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 18.x recommended)
- npm or yarn

### Installation
```bash
# install dependencies
npm install


# development
npm run start

# watch mode
npm run start:dev

# production build
npm run build
npm run start:prod
```

## 🏗️ Architecture Overview
The project follows a domain-driven inspired structure:
- **domain/** → Entities and repository contracts (abstractions).  
- **application/** → Services implementing business logic.  
- **infrastructure/** → Controllers (HTTP layer) and repository implementations (mock-based for now).  
- **shared/mocks/** → Mock data used instead of a database.  

**Products** and **Stock Price** are treated as **separate flows**, each with its own module, making it possible to scale and maintain independently.  


### ⚖️ Error Handling

Error handling is applied differently depending on the layer:

Repository Layer:
Focuses on technical errors (e.g., missing data, mock inconsistency). It does not raise HTTP exceptions, only returns values or throws general errors.

Service Layer:
Responsible for business logic errors. It transforms repository results into meaningful domain responses. Here is where NestJS exceptions (NotFoundException, BadRequestException, etc.) are thrown, which Nest automatically converts into proper HTTP responses.

Example:

```typescript
const product = await this.repo.findBySku(sku);
if (!product) {
  throw new NotFoundException(`No product found with SKU ${sku}`);
}
```
### 🗃️ Database Consideration

Due to time constraints, the project does not integrate a database.
Therefore:

No mappers were required between DTOs and Domain Entities.

Data comes directly from mock files in shared/mocks.

## 🔮 Next Steps

- **Introduce use cases** to properly encapsulate application logic.  
- **Add DTO validation** with `class-validator` to enforce input constraints.  
- **Replace mocks** with a database layer and mappers for clean transformations between persistence models and domain entities.  


### 📂 Project Structure (excerpt)
src/
  modules/
    products/
      domain/
      application/
      infrastructure/
    stock/
      domain/
      application/
      infrastructure/
  shared/mocks/
