import {
  FiActivity,
  FiAward,
  FiCheckCircle,
  FiClipboard,
  FiClock,
  FiHeart,
  FiHome,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiSmile,
  FiTarget,
  FiTrendingUp,
  FiUser,
  FiUsers,
} from 'react-icons/fi'
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaChild,
  FaRunning,
  FaUserMd,
} from 'react-icons/fa'
import {
  MdOutlineSportsHandball,
  MdOutlineElderly,
  MdOutlineAccessibilityNew,
  MdOutlineMonitorHeart,
} from 'react-icons/md'
import { TbBone, TbMassage, TbStretching, TbDisabled } from 'react-icons/tb'
import { GiKneeCap, GiShoulderArmor, GiMuscleUp, GiBackPain } from 'react-icons/gi'
import { LuBrain, LuPersonStanding } from 'react-icons/lu'
import { BsArrowRight, BsStarFill } from 'react-icons/bs'
import { HiOutlineSparkles } from 'react-icons/hi'

const map = {
  experience: FaUserMd,
  plans: FiClipboard,
  evidence: FiCheckCircle,
  patient: FiHeart,
  orthopedic: TbBone,
  sports: MdOutlineSportsHandball,
  back: GiBackPain,
  surgery: TbMassage,
  neuro: LuBrain,
  joint: GiKneeCap,
  posture: LuPersonStanding,
  strength: GiMuscleUp,
  geriatric: MdOutlineElderly,
  pediatric: FaChild,
  neck: MdOutlineAccessibilityNew,
  knee: GiKneeCap,
  shoulder: GiShoulderArmor,
  arthritis: FiActivity,
  sciatica: FiActivity,
  frozen: TbStretching,
  disc: GiBackPain,
  muscle: GiMuscleUp,
  stiffness: TbBone,
  surgical: FiClipboard,
  modern: HiOutlineSparkles,
  one: FiUser,
  clinic: FiHome,
  progress: FiTrendingUp,
  holistic: FiSmile,
  award: FiAward,
  target: FiTarget,
  clock: FiClock,
  shield: FiShield,
  users: FiUsers,
  heart: MdOutlineMonitorHeart,
  running: FaRunning,
  disabled: TbDisabled,
}

export function Icon({ name, size = 22 }) {
  const Cmp = map[name] || FiActivity
  return <Cmp size={size} aria-hidden="true" />
}

export {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  BsArrowRight,
  BsStarFill,
}
