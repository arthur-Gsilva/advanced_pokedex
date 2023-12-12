import { ReactNode } from 'react'
import './globals.css'
import styles from './layout.module.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

type Props = {
    children: ReactNode
}

const Layout = ({children}: Props) => {
    return(
        <html>
            <body>
                <Header />

                <main className={styles.main}>
                    <div className={styles.mainContent}>
                        
                        {children}
                        
                    </div>
                    
                </main>

                <Footer />
            </body>
        </html>
    )
}

export default Layout