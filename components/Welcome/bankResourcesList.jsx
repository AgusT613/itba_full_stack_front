import styles from "@/components/Welcome/Welcome.module.css"
import { MdOutlineSavings } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { FaRegBuilding } from "react-icons/fa";
import { CiShop } from "react-icons/ci";

const bankResources = [
  {
    title: "Tarjeta de Crédito",
    description: "Solicitá tu tarjeta de crédito con renovación bonificada 100% digital.",
    href: "#",
    icon: <MdOutlineSavings className={styles.bankResources__itemBox__icon} />
  },
  {
    title: "Prestamo Personal",
    description: "Solicitá tu préstamo personal a tasa preferencial y usalo para lo que más quieras.",
    href: "#",
    icon: <BsCash className={styles.bankResources__itemBox__icon} />
  },
  {
    title: "Cuenta Sueldo",
    description: "Pasá tu sueldo al Ciudad y disfrutá de todos los beneficios.",
    href: "#",
    icon: <MdWorkOutline className={styles.bankResources__itemBox__icon} />
  },
  {
    title: "Cuenta Jubilación",
    description: "Cobrá tu jubilación en el Ciudad y disfrutá de los ahorros que tenemos para vos.",
    href: "#",
    icon: <HiOutlineUsers className={styles.bankResources__itemBox__icon} />
  },
  {
    title: "Cuenta Consorcio",
    description: "¡Con la cuenta consorcio del Ciudad reducí el gasto bancario de las expensas!",
    href: "#",
    icon: <FaRegBuilding className={styles.bankResources__itemBox__icon} />
  },
  {
    title: "Cuenta Comercio",
    description: "La oferta integral que tu comercio necesita, está en el Ciudad.",
    href: "#",
    icon: <CiShop className={styles.bankResources__itemBox__icon} />
  }
]

export default bankResources