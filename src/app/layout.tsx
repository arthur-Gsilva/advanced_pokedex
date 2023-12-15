import { ReactNode } from 'react'
import './globals.css'
import styles from './layout.module.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PokeColorProvider } from '@/contexts/PokeColor'

type Props = {
    children: ReactNode
}

const Layout = ({children}: Props) => {
    return(
        <html>
            <PokeColorProvider>
                <body>
                    <Header />

                    <main className={styles.main}>
                        <div className={styles.mainContent}>
                            
                            {children}
                            
                        </div>
                        
                    </main>

                    <Footer />
                </body>
            </PokeColorProvider>
            
        </html>
    )
}

export default Layout