This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


// app/products/[id]/page.tsx (Dynamic page)
import Hero from '@/components/Home/Hero/Hero';

interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
}

async function getProducts(): Promise<Product[]> {
  // Simulate fetching products from a database or API
  return [
    {
      id: 1,
      name: 'Laptop',
      description: 'High-performance laptop.',
      images: ['/laptop1.jpg', '/laptop2.jpg'],
    },
    {
      id: 2,
      name: 'Tablet',
      description: 'Portable tablet.',
      images: ['/tablet1.jpg', '/tablet2.jpg'],
    },
    {
      id: 3,
      name: 'Smartphone',
      description: 'Latest smartphone.',
      images: ['/phone1.jpg', '/phone2.jpg'],
    },
  ];
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const products = await getProducts();
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <Hero images={product.images} productName={product.name}/>
    </div>
  );
}

// components/Home/Hero/Hero.tsx
interface HeroProps {
  images: string[];
  productName: string;
}

const Hero: React.FC<HeroProps> = ({ images, productName }) => {
  return (
    <div className="hero">
      <h2>Images for {productName}</h2>
      <div className="image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`${productName} image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Hero;

Explanation:

app/products/[id]/page.tsx (Dynamic Page):
This page is responsible for displaying the details of a specific product based on the id in the URL.
getProducts() simulates fetching product data (in a real app, you'd use a database or API).
We use params.id to get the id from the URL, and then find the corresponding product in the products array.
We pass the product.images array and the product.name as props to the Hero component.
components/Home/Hero/Hero.tsx:
This component receives an array of image URLs (images) and a product name (productName) as props.
It renders a heading with the product name and an image gallery.
images.map() is used to iterate over the images array and render each image.
The alt tag of the image is dynamically generated with the productName and index.
How it works:

Dynamic Route: When you navigate to a URL like /products/2, Next.js recognizes the [id] segment and renders app/products/[id]/page.tsx.
Data Fetching: The getProducts() function fetches the product data.
Product Selection: The code finds the product with the matching id from the URL.
Prop Passing: The product.images array and product.name are passed as props to the Hero component.
Rendering: The Hero component renders the image gallery using the passed data.
Key improvements:

Clear example of passing an object array's data to a component from a dynamic page.
Uses async/await for simulated data fetching.
Shows how to access the params object in a dynamic page.
Includes type safety with interfaces.
Clear separation of data fetching and component rendering.
Alt tags for images.