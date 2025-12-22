import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/auth/login')({
  component: Login,
});

function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className='flex min-h-[calc(100vh-4rem)] items-center justify-center p-4'>
      <div className='relative w-full max-w-[420px]'>
        {/* Glow effect behind the card */}
        <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 blur-xl opacity-50' />

        <Card className='relative w-full bg-card/60 backdrop-blur-xl border-white/10 shadow-2xl overflow-hidden'>
          {/* Top accent line */}
          <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50' />

          <CardHeader className='space-y-3 pt-8'>
            <CardTitle className='text-3xl font-bold tracking-tight text-foreground text-center'>
              Welcome back
            </CardTitle>
            <CardDescription className='text-muted-foreground text-center text-base'>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className='pt-6'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='space-y-2.5'>
                <Label htmlFor='email' className='text-foreground font-medium'>
                  Email
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='name@example.com'
                  className='h-12 bg-background/50 border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground placeholder:text-muted-foreground/50 transition-all duration-200 rounded-lg px-4'
                  required
                />
              </div>
              <div className='space-y-2.5'>
                <div className='flex items-center justify-between'>
                  <Label
                    htmlFor='password'
                    className='text-foreground font-medium'
                  >
                    Password
                  </Label>
                  <Link
                    to='/auth/login'
                    className='text-sm text-primary hover:text-primary/80 transition-colors font-medium'
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id='password'
                  type='password'
                  className='h-12 bg-background/50 border-input focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground transition-all duration-200 rounded-lg px-4'
                  required
                />
              </div>
              <Button
                className='w-full h-12 text-base font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/20 rounded-lg'
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className='mr-2 h-5 w-5 animate-spin' />
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className='pb-8'>
            <div className='text-sm text-muted-foreground w-full text-center'>
              Don't have an account?{' '}
              <Link
                to='/auth/signup'
                className='font-semibold text-primary hover:text-primary/80 hover:underline underline-offset-4 transition-colors'
              >
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
