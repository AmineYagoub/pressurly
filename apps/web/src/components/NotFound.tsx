import { Link } from '@tanstack/react-router';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function NotFound() {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-4rem)] p-4'>
      <Card className='w-[400px] text-center'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold'>404</CardTitle>
          <CardDescription className='text-xl'>Page Not Found</CardDescription>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground'>
            The page you are looking for doesn't exist or has been moved.
          </p>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button asChild>
            <Link to='/'>Go Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
