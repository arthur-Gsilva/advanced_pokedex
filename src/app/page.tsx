import { BoxInfo } from '@/components/BoxInfo'
import styles from './page.module.css'

const Page = () => {
    return(
        <div className={styles.container}>
            <BoxInfo pokeName/>
        </div>
    )
}

export default Page