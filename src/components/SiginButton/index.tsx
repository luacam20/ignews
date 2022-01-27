import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/client'

import styles from './styles.module.scss'

export function SigInButton() {
    
    //if o usuario esta logado 
    const [session] = useSession()
    
    return session ? (
        <button 
            type="button" 
            className={styles.signinButton}
            onClick={()=> signOut()}
        >
            <FaGithub color="#04d361" />
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button 
            type="button" 
            className={styles.signinButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#eba417" />
            Sign in with GitHub
        </button>
    )
}