import { Product } from "src/modules/products/domain/entities/product";
import { Sku } from "src/modules/shared/domain/entities/Sku";
import { Stock } from "src/modules/stock/domain/entities/stock";
import { DataSource } from "typeorm";


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "beer_challenge",
    entities: [Product, Sku, Stock],
    synchronize: true, // ⚠️ solo para desarrollo
});

async function seed() {
    await AppDataSource.initialize();

    const productRepo = AppDataSource.getRepository(Product);
    const skuRepo = AppDataSource.getRepository(Sku);
    const stockRepo = AppDataSource.getRepository(Stock);

    // === PRODUCTS ===
    const products = [
        {
            id: 127,
            brand: "Modelo Especial",
            image: "ModeloEspecial",
            style: "Lager",
            substyle: "Light Lager",
            abv: "4.4%",
            origin: "Mexico",
            information:
                "Modelo Especial es una lager mexicana ligera con un sabor limpio y crujiente, reconocida por su consistencia y calidad durante más de 90 años.",
            skus: [
                { code: "10167", name: "12 - 24oz Cans" },
                { code: "10166", name: "18 - 12oz Cans" },
                { code: "10170", name: "Half Barrel" },
            ],
        },
        {
            id: 374,
            brand: "Miller Lite",
            image: "MillerLite",
            style: "Lager",
            substyle: "Light Lager",
            abv: "4.17%",
            origin: "Wisconsin, USA",
            information:
                "Miller Lite es una cerveza ligera y refrescante, famosa por su sabor puro y menos llenador, pionera en la categoría de light beer americana.",
            skus: [
                { code: "10035", name: "24 - 12oz Bottles, 6 Pack" },
                { code: "10041", name: "24 - 12oz Bottles, 12 Pack" },
            ],
        },
        {
            id: 743,
            brand: "Corona Premier",
            image: "Corona",
            style: "Lager",
            substyle: "Mexican Lager",
            abv: "4.0%",
            origin: "Mexico",
            information:
                "Corona Premier ofrece el sabor refrescante de Corona con menos calorías y carbohidratos, ideal para quienes buscan una cerveza ligera pero con pleno alcohol.",
            skus: [
                { code: "35678", name: "24 - 12oz Bottles, 6 Pack" },
                { code: "35681", name: "Quarter Barrel Slim" },
            ],
        },
        {
            id: 841,
            brand: "Budweiser",
            image: "Budweiser",
            style: "Lager",
            substyle: "American Lager",
            abv: "5%",
            origin: "Missouri, USA",
            information:
                "Budweiser es una lager americana de cuerpo medio, sabor balanceado y refrescante, elaborada con cebada seleccionada y lúpulos premium.",
            skus: [{ code: "15337", name: "24 - 12oz Bottles, 12 Pack" }],
        },
        {
            id: 902,
            brand: "Heineken",
            image: "Beer",
            style: "Lager",
            substyle: "Pale Lager",
            abv: "5%",
            origin: "Netherlands",
            information:
                "Heineken es una cerveza lager clara, con sabor ligero y refrescante, reconocida mundialmente por su calidad y consistencia.",
            skus: [
                { code: "20001", name: "24 - 12oz Bottles, 6 Pack" },
                { code: "20002", name: "24 - 12oz Bottles, 12 Pack" },
            ],
        },
        {
            id: 903,
            brand: "Guinness Draught",
            image: "WineGlass",
            style: "Stout",
            substyle: "Irish Stout",
            abv: "4.2%",
            origin: "Ireland",
            information:
                "Guinness Draught es una stout irlandesa icónica, con cuerpo cremoso, notas a café y chocolate y un sabor suave y equilibrado.",
            skus: [
                { code: "30001", name: "12 - 16oz Cans" },
                { code: "30002", name: "4 - 1L Bottles" },
            ],
        },
    ];

    const stockPrice: Record<string, { stock: number; price: number }> = {
        "10167": { stock: 130, price: 2865 },
        "10166": { stock: 456, price: 2640 },
        "10170": { stock: 6, price: 18100 },
        "10035": { stock: 190, price: 2940 },
        "10041": { stock: 8, price: 2660 },
        "35678": { stock: 141, price: 3518 },
        "35681": { stock: 12, price: 9900 },
        "15337": { stock: 607, price: 3518 },
        "20001": { stock: 320, price: 3100 },
        "20002": { stock: 150, price: 5800 },
        "30001": { stock: 90, price: 4200 },
        "30002": { stock: 45, price: 8700 },
    };

    for (const p of products) {
        const product = productRepo.create({
            id: p.id,
            brand: p.brand,
            image: p.image,
            style: p.style,
            substyle: p.substyle,
            abv: p.abv,
            origin: p.origin,
            information: p.information,
        });
        await productRepo.save(product);

        for (const s of p.skus) {
            const sku = skuRepo.create({
                code: s.code,
                name: s.name,
                product,
            });
            await skuRepo.save(sku);

            const stock = stockRepo.create({
                stock: stockPrice[s.code].stock,
                price: stockPrice[s.code].price,
            });
            await stockRepo.save(stock);
        }
    }

    console.log("✅ Seed completado");
    await AppDataSource.destroy();
}

seed().catch((e) => {
    console.error(e);
    process.exit(1);
});
