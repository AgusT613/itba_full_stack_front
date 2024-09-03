import Image from "next/image";
import FooterInfoContainer from "./FooterInfoContainer";
import styles from "@/components/Welcome/Welcome.module.css"
import ITBANK_LOGO from "@/public/itbank-logo.png"
import bankContacts from "./bankContacts";

export default function FooterHome(){
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.footer__wrapperInfo}>
                <FooterInfoContainer title="Suscribite" description="Enterate de todas las novedades y beneficios que tenemos para vos." className={styles.footer__form}>
                <form>
                    <input type="email" placeholder='Correo electrónico'/>
                    <select name="nw-interests" id="newsletter-interests">
                    <option selected>Seleccione un interés</option>
                    <option value="promotions">Promociones y Beneficios</option>
                    <option value="pymes">Instituto PyMes</option>
                    <option value="economic-studies">Estudios Económicos</option>
                    <option value="bid">Subastas</option>
                    <option value="enterprise">Empresas</option>
                    </select>
                    <input type="submit" value="Suscribirse"/>
                </form>
                </FooterInfoContainer>
                <FooterInfoContainer title="Contactanos" description="De Lunes a Viernes de 8 a 20hs" className={styles.footer__contact}>
                <ul>
                    {bankContacts.map(contact => (
                    <div key={contact.title}>
                        <h5>{contact.title}</h5>
                        <span>{contact.number}</span>
                    </div>
                    ))}
                </ul>
                </FooterInfoContainer>
                <FooterInfoContainer title="Links Útiles" description="Descubre más acerca de nuestros servicios" className={styles.footer__links}>
                    <a href="#">Preguntas frecuentes</a>
                </FooterInfoContainer>
            </div>
            <div className={styles.footer__logo}>
                <Image src={ITBANK_LOGO} alt='Logo del banco itbank' height={50}/>
            </div>
        </footer>
    )
}