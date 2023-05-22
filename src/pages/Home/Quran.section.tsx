import QuranImage from "../../assets/Images/quran-read.webp";
import SectionWithImg from "../../components/common/SectionWithImg";

export const TheQuranSection = () => {
  return (
    <SectionWithImg
      secHead="The Quran"
      par1="The Holy Quran is the last revealed word of Allah, and the Seal
    of Prophets, Muhammad (ﷺ) is the one to whom it was revealed.
    Allah has revealed the Quran to His beloved Prophet Hazrat
    Muhammad (ﷺ) and there is no doubt about its divinity. Hazrat
    Muhammad (ﷺ) is the one on whom the Quran descended, as it were.
    The Quran is the light of knowledge and belief, and the Holy
    Prophet (ﷺ) is its practical example and an excellent exemplar."
      par2="Quran is the prime source of every Muslim's faith and practice.
    Quran provides guidelines for a just society, proper human
    conduct and an equitable economic system. The claim is made by
    no one but Allah Almighty Himself. The Quran is guidance and
    leadership, and Hazrat Muhammad (ﷺ) is the guide and leader. The
    Quran is the call and message of Truth, and the Prophet (ﷺ) is
    the inviter and Messenger."
      par3={`The Prophet Hazrat Muhammad (ﷺ) dictated the text to His Companions after each Revelation. The word "Quran" is Arabic for "Recitation". There is no mistake in the Quran till today and will not be. The Quran is a record of the exact words revealed by Allah Almighty through the Hazrat Jibrail (A.S) to His beloved Prophet Hazrat Muhammad (ﷺ).
      It was memorized by Hazrat Muhammad (ﷺ) and then dictated to the Companions of Hazrat Muhammad (ﷺ), and written down by scribes, who cross-checked it during his lifetime.
      Allah Himself has taken the responsibility of protecting the Quran, And the Qur'an is still safe today as it was revealed. Not one word of Quran’s 114 chapters and Surahs has been changed over the centuries, so that the Quran is in every detail the unique and miraculous text which was revealed to our Prophet Hazrat Muhammad (ﷺ) fourteen centuries ago.
      The life of our Hazrat Muhammad (ﷺ) was moulded according to the Quran and He gave a practical demonstration of whatever the Quran said.
      `}
      imgUrl={QuranImage}
    />
  );
};

export default TheQuranSection;
