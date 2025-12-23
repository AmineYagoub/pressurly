import { createFileRoute } from '@tanstack/react-router';
import SignupForm from '@/components/auth/SignupForm';

export const Route = createFileRoute('/auth/signup')({
  component: SignupForm,
});
