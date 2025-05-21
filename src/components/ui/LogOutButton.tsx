"use client";

import React, { use } from 'react'
import { Button } from './button'
import { Loader2 } from 'lucide-react';
import { toast } from "sonner"
import { useRouter } from 'next/navigation';
import { logOutAction } from '@/actions/users';

function LogOutButton() {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleLogOut = async () => {
    setLoading(true);
    
    const {errorMessage} = await logOutAction();

    if (!errorMessage) {
      toast.success("Logged out", {
        description: "You have been successfully logged out",
      })
      router.push("/");
    }else {
      toast.error("Error", {
      description: errorMessage,
    });
    }
    setLoading(false);
  };
  
  return  (
    <Button variant ="outline"
    onClick={handleLogOut}
    className="w-24"
    disabled={loading}>
     {loading ? <Loader2 className="animate-spin" />: "Log Out"}
    </Button>
  );
}

export default LogOutButton