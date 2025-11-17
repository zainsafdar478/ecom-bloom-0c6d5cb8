import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '@/services/productService';
import { useCart } from '@/features/cart/cartContext';
import { formatPrice } from '@/utils/formatPrice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <Badge className="absolute top-2 right-2" variant="destructive">
              Out of Stock
            </Badge>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Star className="h-3 w-3 fill-primary text-primary mr-1" />
              <span>{product.rating}</span>
              <span className="ml-1">({product.reviews})</span>
            </div>
          </div>
          <h3 className="font-semibold text-foreground line-clamp-1 mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
          </div>
        </CardContent>
      </Link>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
