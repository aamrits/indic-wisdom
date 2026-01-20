import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getWordCloudData } from "../utils";
import { WordCloudComponent } from "../components/WordCloudComponent";
import WordTiles from "../components/WordTiles";
import { slugify, normalizeWord } from "../utils";

const text = `
Śruti, Smṛti, Itihāsa, Purāṇa, Āgama, Tantra, Darśana, Vedāṅga, Upaveda, Brāhmaṇa, Āraṇyaka, Upaniṣad, Vedānta, Kalpa Sūtra, Śrauta Sūtra, Gṛhya Sūtra, Dharmaśāstra, Smārta Tradition, Nigama, Āmnāya, Ṛg Veda, Yajur Veda, Sāma Veda, Atharva Veda, Veda Pāṭha, Śākhā, Saṃhitā, Krama Pāṭha, Jatā Pāṭha, Ghanapāṭha, Chandas, Mantra, Brāhmaṇa Grantha, Yajña, Homa, Soma Yāga, Agnihotra, Darśa–Pūrṇamāsa, Ṛtvik, Hotṛ, Mahābhārata, Rāmāyaṇa, Ādi Parva, Vana Parva, Śānti Parva, Uttara Kāṇḍa, Yuddha Kāṇḍa, Itihāsa–Purāṇa Paramparā, Kṣatriya Dharma, Rāja Nīti, Vanavāsa, Guru–Śiṣya Paramparā, Oral Epic Tradition, Śloka, Anuṣṭubh Chandas, Kāvya Paramparā, Mahākāvya, Ākhyāna, Upākhyāna, Kathā, Vasiṣṭha, Viśvāmitra, Durvāsā, Agastya, Aṣṭāvakra, Vyāsa, Vālmīki, Nārada, Bṛhaspati, Kaśyapa, Atri, Bhṛgu, Pulastya, Pulaha, Kratu, Marīci, Saptarṣi Maṇḍala, Gotra, Pravara, Ṛṣi Paramparā, Yoga Vāsiṣṭha, Aṣṭāvakra Gītā, Bhagavad Gītā, Sāṅkhya Darśana, Yoga Darśana, Nyāya Darśana, Vaiśeṣika Darśana, Mīmāṃsā, Advaita, Viśiṣṭādvaita, Dvaita, Brahman, Ātman, Māyā, Mokṣa, Saṃsāra, Karma, Dharma, Jñāna, Bhakti, Sat, Cit, Ānanda, Vidyā, Avidyā, Prajñā, Upāsanā, Neti Neti, Om, Śāntiḥ, Kāraṇa, Tattva
`;

type Props = {
  theme: "light" | "dark";
};

export const Home = ({ theme }: Props) => {
  const words = useMemo(() => getWordCloudData(text), []);
  const navigate = useNavigate();

  const tileWords = useMemo(
    () =>
      words.map(w => {
        const normalized = normalizeWord(w.text);
        return {
          label: w.text,               // Vasiṣṭha
          slug: slugify(normalized),   // vasistha
        };
      }),
    [words]
  );

  const handleTileNavigate = (slug: string) => {
    navigate(`/${slug}`);
  };

  return (
    <>
      <h1 style={{ marginTop: "0" }}>Indic Wisdom</h1>

      {/* Desktop */}
      <div className="desktop-only">
        <WordCloudComponent words={words} mode={theme} />
      </div>


      {/* Mobile */}
      <div className="mobile-only">
        <WordTiles
          words={tileWords}
          columns={2}
          onNavigate={handleTileNavigate}
        />
      </div>
    </>
  );
}
