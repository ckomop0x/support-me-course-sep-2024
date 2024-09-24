import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" />
        Support Me
      </h1>
      <p>The best dashboard to manage customer support.</p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href={'/login'}>Login</Link>
        </Button>
        <span>or</span>
        <Button variant="outline" asChild>
          <Link href={'/signup'}> Sing Up</Link>
        </Button>
      </div>
    </>
  );
}
