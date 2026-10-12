// Íconos disponibles para usar en negocio.ts (todos de Lucide: https://lucide.dev/icons).
// Para sumar uno nuevo: importalo desde '@lucide/astro/icons/<nombre-en-ingles>' y agregalo al objeto.
import Activity from '@lucide/astro/icons/activity';
import Ambulance from '@lucide/astro/icons/ambulance';
import ArrowRight from '@lucide/astro/icons/arrow-right';
import ArrowUpRight from '@lucide/astro/icons/arrow-up-right';
import AtSign from '@lucide/astro/icons/at-sign';
import Award from '@lucide/astro/icons/award';
import BadgeCheck from '@lucide/astro/icons/badge-check';
import Bandage from '@lucide/astro/icons/bandage';
import Bone from '@lucide/astro/icons/bone';
import CalendarCheck from '@lucide/astro/icons/calendar-check';
import Camera from '@lucide/astro/icons/camera';
import Cat from '@lucide/astro/icons/cat';
import CircleCheck from '@lucide/astro/icons/circle-check';
import Clock from '@lucide/astro/icons/clock';
import CreditCard from '@lucide/astro/icons/credit-card';
import Dog from '@lucide/astro/icons/dog';
import FlaskConical from '@lucide/astro/icons/flask-conical';
import HandHeart from '@lucide/astro/icons/hand-heart';
import Heart from '@lucide/astro/icons/heart';
import HeartHandshake from '@lucide/astro/icons/heart-handshake';
import HeartPulse from '@lucide/astro/icons/heart-pulse';
import Hospital from '@lucide/astro/icons/hospital';
import House from '@lucide/astro/icons/house';
import Mail from '@lucide/astro/icons/mail';
import MapPin from '@lucide/astro/icons/map-pin';
import MessageCircle from '@lucide/astro/icons/message-circle';
import Microscope from '@lucide/astro/icons/microscope';
import Music2 from '@lucide/astro/icons/music-2';
import Navigation from '@lucide/astro/icons/navigation';
import PawPrint from '@lucide/astro/icons/paw-print';
import Phone from '@lucide/astro/icons/phone';
import Pill from '@lucide/astro/icons/pill';
import Receipt from '@lucide/astro/icons/receipt';
import Scissors from '@lucide/astro/icons/scissors';
import ShieldCheck from '@lucide/astro/icons/shield-check';
import ShieldPlus from '@lucide/astro/icons/shield-plus';
import ShoppingBag from '@lucide/astro/icons/shopping-bag';
import Siren from '@lucide/astro/icons/siren';
import Stethoscope from '@lucide/astro/icons/stethoscope';
import Store from '@lucide/astro/icons/store';
import Syringe from '@lucide/astro/icons/syringe';
import TestTube from '@lucide/astro/icons/test-tube';
import ThumbsUp from '@lucide/astro/icons/thumbs-up';
import Truck from '@lucide/astro/icons/truck';
import Users from '@lucide/astro/icons/users';

export const iconos = {
  actividad: Activity,
  ambulancia: Ambulance,
  flecha: ArrowRight,
  'flecha-diagonal': ArrowUpRight,
  arroba: AtSign,
  premio: Award,
  verificado: BadgeCheck,
  venda: Bandage,
  hueso: Bone,
  calendario: CalendarCheck,
  camara: Camera,
  gato: Cat,
  check: CircleCheck,
  reloj: Clock,
  tarjeta: CreditCard,
  perro: Dog,
  laboratorio: FlaskConical,
  'mano-corazon': HandHeart,
  corazon: Heart,
  'apreton-corazon': HeartHandshake,
  latido: HeartPulse,
  hospital: Hospital,
  casa: House,
  email: Mail,
  pin: MapPin,
  chat: MessageCircle,
  microscopio: Microscope,
  musica: Music2,
  navegar: Navigation,
  huella: PawPrint,
  telefono: Phone,
  pastilla: Pill,
  recibo: Receipt,
  tijera: Scissors,
  escudo: ShieldCheck,
  'escudo-cruz': ShieldPlus,
  bolsa: ShoppingBag,
  sirena: Siren,
  estetoscopio: Stethoscope,
  tienda: Store,
  jeringa: Syringe,
  tubo: TestTube,
  'pulgar-arriba': ThumbsUp,
  camion: Truck,
  personas: Users,
} as const;

export type NombreIcono = keyof typeof iconos;
