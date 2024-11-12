import styles from "@/components/footerHome/footerHome.module.css"

export default function FooterInfoContainer({title, description, children, className}){
    const classVar = `${styles.footerInfoContainer} ${className}`

    return (
      <div className={classVar}>
        <h5>{title}</h5>
        <p>{description}</p>
        {children}
      </div>
    )
}