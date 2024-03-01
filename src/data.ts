type Product = {
    name: string;

    description: string;

    price: number;

    rating: number;

    stock: number;

    image: string;

    category: string;
};

const products: Product[] = [
    {
        name: "Gamer's Delight Laptop",
        description:
            "A powerful gaming laptop with top-tier graphics and performance for immersive gaming experiences.",
        price: 1200,
        rating: 4,
        stock: 5,
        //a fake image
        image:
            "https://m.media-amazon.com/images/I/31TcnQiBTpL._AC_UF894,1000_QL80_.jpg",
        category: "Electronics",
    },
    // More Electronics
    {
        name: "SmartTech Pro Phone",
        description:
            "Experience cutting-edge technology with our latest SmartTech Pro, featuring an ultra-responsive display and superior camera quality.",
        price: 800,
        rating: 5,
        stock: 10,
        image: "https://m.media-amazon.com/images/I/61L1ItFgFHL.jpg",
        category: "Electronics",
    },
    {
        name: "Sony Headphones",
        description:
            "Superior sound quality in a wireless headphone.",
        price: 100,
        rating: 5,
        stock: 10,
        image: "https://media.currys.biz/i/currysprod/M10247634_white?$l-large$&fmt=auto",
        category: "Electronics",
    },
    {
        name: "Portable Charger",
        description:
            "Charging bank for your convenience.",
        price: 20,
        rating: 5,
        stock: 10,
        image: "data:image/jpeg;base64,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",
        category: "Electronics",
    },
    {
        name: "Rapid Dual USB-C Charger",
        description:
            "Efficiently power up your devices with our compact, high-speed USB-C charging brick designed for the modern tech-savvy user.",
        price: 12,
        rating: 4,
        stock: 20,
        image:
            "https://d1b5h9psu9yexj.cloudfront.net/45024/Spigen-PowerArc-ArcStation-Pro_20210512-160334_full.jpeg",
        category: "Electronics",
    },

    // Clothing
    {
        name: "Classic Comfort Tee",
        description:
            "Crafted for comfort, our soft and breathable t-shirt is perfect for personal customization or stylish everyday wear.",
        price: 20,
        rating: 4,
        stock: 25,
        image:
            "https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/091B833490D74F4C87D5CE3767E806C7/MP236558_11.jpg",
        category: "Clothing",
    },
    {
        name: "Underarmor Joggers",
        description:
            "Perfect for throwing on after or during workouts, this pair are crafted from a specially engineered fabrication delivering a soft-touch and sweat-wicking finish for a comfortable and dry feel. ",
        price: 54,
        rating: 4,
        stock: 25,
        image:
            "https://www.sportsdirect.com/images/imgzoom/34/34733903_xxl_a10.jpg",
        category: "Clothing",
    },
    
    {
        name: "SleekFit Denim Jeans",
        description:
            "Stay trendy with our Slim Fit Jeans, offering both comfort and style with durable, high-quality denim.",
        price: 45,
        rating: 3,
        stock: 15,
        image:
            "https://benzakdenimdevelopers.com/cdn/shop/products/BDD-006-loomstate-denim-15-oz-RHT-0_720x.jpg?v=1664551915",
        category: "Clothing",
    },
    {
        name: "Nike Airforces",
        description:
            "This classic and comfy style is what every wardrobe Ideal for casual weekend wear.",
        price: 89,
        rating: 5,
        stock: 10,
        image:
            "https://m.media-amazon.com/images/I/613HmnmaO6L._AC_SX695_.jpg",
        category: "Clothing",
    },
    {
        name: "PatternPop Fancy Socks",
        description:
            "Add a splash of fun to your outfit with our vibrant, patterned socks, combining style with everyday comfort.",
        price: 15,
        rating: 4.8,
        stock: 7,
        image:
            "https://goldiesocks.com/cdn/shop/products/mens-sock-argyle-blue-goldie-socks_540x.jpg?v=1541354007",
        category: "Clothing",
    },

    // Groceries
    {
        name: "Crispy Red Apples",
        description:
            "Enjoy the natural sweetness of our freshly-picked, juicy red apples, perfect for a healthy snack.",
        price: 0.5,
        rating: 4,
        stock: 100,
        image: "https://5.imimg.com/data5/MG/WX/MY-1600400/fresh-apple-500x500.jpg",
        category: "Groceries",
    },
    {
        name: "Hearty Whole Grain Bread",
        description:
            "Indulge in the wholesome goodness of our whole grain bread, baked fresh for a nutritious and delicious choice.",
        price: 2,
        rating: 4,
        stock: 20,
        image: "https://vimafoods.com/wp-content/uploads/panecillo-vima-foods.jpg",
        category: "Groceries",
    },
    {
        name: "Crunchy Delight Cashews",
        description:
            "Savor the rich, nutty flavor of our premium cashews, ideal for a healthy, energizing snack.",
        price: 4,
        rating: 3,
        stock: 56,
        image:
            "https://www.farmfreshnuts.com/wp-content/uploads/2018/02/Cashews-DRS.jpg",
        category: "Groceries",
    },
];

export type { Product };
export { products };