import styles from "@/components/bankResourceContainer/bankResourceContainer.module.css"

export default function BankResourceContainer ({resourceList}){
    const { title, description, href, icon } = resourceList

    return (
        <div className={styles.bankResources__itemBox}>
            <div>
                {icon}
                <h5 className={styles.bankResources__itemBox__title}>{title}</h5>
            </div>
            <p className={styles.bankResources__itemBox__description}>{description}</p>
            <a href={href} className={styles.bankResources__itemBox__moreInfoLink}>
                <span>Conocer Más</span>
                <span>+</span>
            </a>
        </div>
    )
}