import { shadow } from '@/app/styles/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';
import DarkModeToggle from './DarkModeToggle';
import LogOutButton from './LogOutButton';
import { getUser } from '@/app/auth/server';
import { SidebarTrigger } from './sidebar';

async function Header() {

  const user = await getUser();
  return (
    <header className="relative flex h-24 w-full items-center jutify-between bg-popover px-3 
    sm:px-8"
    style={{
      boxShadow: shadow
    }}
    
    >
        <SidebarTrigger className="absolute left-1 top-1"/>

        <Link className="flex items-end gap-2" href="/">
          <Image
            src="/goatius.png" 
            alt="logo" 
            width={60}
            height={60}
            className="rounded-full"
            priority
            />
        
          <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
            GOAT <span>Notes</span>
          </h1>
        </Link>

        <div className="flex w-full justify-end gap-4">
          {user ? (
            <LogOutButton />
          ) : (
            <>
              <Button asChild >
              <Link href="/sign-up" className="hidden sm:block">Sign Up</Link>
              </Button>
              <Button asChild variant="outline" >
              <Link href="/login">Login</Link>
              </Button>
            </>
          )}
          <DarkModeToggle />
        </div>
    </header>
  );
}

export default Header