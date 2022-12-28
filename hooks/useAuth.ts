import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';
import { me } from '../services'

const useAuth = () => {
    const router = useRouter();
    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await me();
                setUser(response.data.user);

                if(router.pathname === '/login') {
                    router.push('/');
                }
            } catch(error) {
                if(router.pathname === '/admin')
                {
                    router.push('/login');
                }
            }
        }
        checkAuth();
    }, [router]);

    return user;
}

export default useAuth;