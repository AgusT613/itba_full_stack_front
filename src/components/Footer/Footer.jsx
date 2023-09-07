import styles from "./Footer.css"

export function Footer() {
    return (
        <>
         <footer class="mas__informacion">
            <section>
                <h4>Legales</h4>
                <ul>
                    <li>
                        <a href="" target="_blank">Políticas de privacidad</a>
                    </li>
                    <li>
                        <a href="" target="_blank">Términos y condiciones</a>
                    </li>
                </ul>
            </section>
            <section>
                <h4>Contacto</h4>
                <ul>
                    <li>
                        <a href="" target="_blank">WhatsApp</a>
                    </li>
                    <li>
                        <a href="" target="_blank">Instagram</a>
                    </li>
                    <li>
                        <a href="" target="_blank">Twitter</a>
                    </li>
                </ul>
            </section>
            <section>
                <h4>Horarios</h4>
                <p>Lunes a Viernes de 8hs a 18 hs</p>
            </section>
        </footer>
        </>
    )
}