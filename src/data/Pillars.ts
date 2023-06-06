import ashadImage from "../assets/shahadah_icon.webp";
import salahImage from "../assets/salah_icon.webp";
import zakahImage from "../assets/zakat_icon.webp";
import sawmImage from "../assets/fasting_icon.webp";
import hajjImage from "../assets/hajj_icon.webp";
interface PillarType {
  PillarEnName: string;
  PillarArName: string;
  icon: string;
}
export const FivePillarsData: PillarType[] = [
  {PillarEnName: "Shahadah", PillarArName: "الشهادة", icon: ashadImage},
  {PillarEnName: "Salah", PillarArName: "الصلاة", icon: salahImage},
  {PillarEnName: "Sawm", PillarArName: "الصوم", icon: sawmImage},
  {PillarEnName: "Zakat", PillarArName: "الزكاة", icon: zakahImage},
  {PillarEnName: "Hajj", PillarArName: "الحج", icon: hajjImage},
];
