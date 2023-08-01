import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineAppstore, AiOutlineYoutube } from "react-icons/ai";
import { CgGames } from "react-icons/cg"
import { BiDonateHeart } from "react-icons/bi";
import { MdOutlineCampaign, MdOutlineRiceBowl } from "react-icons/md"
import { GiMachineGunMagazine } from "react-icons/gi"
import { GrAidOption } from "react-icons/gr"
import styles from '../styles/Home.module.css'

export default function Home() {
  const [appear, setAppear] = useState(false);

  const handleAppear = () => {
    setAppear(true);
  }

  const handleDisappear = () => {
    setAppear(false);
  }

  const appLogos = ["https://dsm01pap007files.storage.live.com/y4m_lPPAlxHccjhvxNmX3RcBU8mXFf9abDjMIRt9MVI4S6iwhf0-4Sw82L42eGOFyKRJ4rz7rjUMcdqlDSpeVREyAqavtBYoS_6KfH7V_X1GnpW_GrtM9G_13h9kIJpJJsZlyNPuSA62S7M9uPzrMwOqvQmuRT1xf4T97VPQ2rmxwWXKWrJXeYT-az301Q2Yhhq?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mLzSog6BA8kX03-5J9J0Ok0c4I5ytl8AG0HI7on7CqEfBr9xhXvGMwUW8ZixpCRIgPXbX-l_1Pja1_qJ1_aEvTThu4S7EAAT_6IuAGuiBFDTbA4m_z8vpnSwTpWA_abe8-by9VA6DFQD1hn6SXrAVAl0UyE3gFw6K0xGsCfmW_fvB-f0mDQaKMwSKrPiqfiNe?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mQXuVsVaTz3HIXSgWiPIbzlem9VctOz90pnJtBJ5dvFsXrtoikd_jgi5UVltn_5qvWheo3ZboJHgWiVBi2a25edUwnQN0LVmv3KuBGJuA8VIqb8DbgfBbdAJNifo8micVPGByh_sflob6fLAxxcB8i7LCh3HKc0SBXrMVYJFWiWZz8LB79Ldzzp8xzy-uXDIw?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4m5oUiKnVUoAiMp_RIcQ1ee_LE1lG7YY-aBsVAlZkWcMyJduOVAHZJaaKdwqbjs18nNoMyBYgfTvu2IZ3BTJm9mAXS2GoY7qPNrNvdVmonQuC-uKIGd4CYQAACgSTuIlL4LzwiG7f-ncADRKIWF4-HW_01zBBECgvt563oCqKz8qvGM0RGHeKK95IodNzxSOHX?width=240&height=240&cropmode=none", "https://dsm01pap007files.storage.live.com/y4moXIbkwbNy4rIhKjvqgXxGKeDoLdwaAcQbUSlQOvNJNe47-OtmRVPmmdtW1-XYSQPnE8kHae7LF0jDDAHhUfS0hvuCHJFEtOh2HRjQ69P6wUFCTt6FvDs1OjT64gkjud_mojMmp3zUiWaZSSIrqxDzprTrj_3qdmeZdS86Rzmy_cF04Lt1lBrLY7trnrAT-Qa?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mnImozbjUys7TL6GkWJHYom3F87lsu1zQ11TiQKI92lQTWxMP5SF3GPXW-hi2C6JaWmYA8i1-V2BTkF83wxOaCeDLTjeHDyJbdXjfislct2wLROWAN4q0K75vM2L-evyxdVwAacH3D4qSMWyalOw6MVATMkmmz5rtdfQgQJFUHe9RuQHqnXW8t5DflyWAn3a1?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4m3PtvGMeHDWlpxypicWd8lkTBBqGIcgEzZIhsgLrzK0kCTdrgwCLhGcSJVnJyj7Uk1xiixc29v4xuQsFAEMEdYrNbkUPh_nmiWQl4rP8gngOCjNhhHVc5bPxEuMrkjBGAB2zIZVvC302pypRu8UY0WUcx64T2BxiN9DUGedGm9nwaCkLYtxGk1bHGWq_dJK4V?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mCt6eTIeOA2-w1pdmH6SDD-ZZ_K-296GpK4QoNJPeWxVdBTpBJFpW03rWyzxtR6e1rk26DL5-tcgkybap4Q0gzEcLcS2pFUfIGICLCIdS4QWELP8yEYrqAqf4PdsOzvQQX3YUE2F380QPbDQth3RM71TabpiwOW8RGrzyZ1YH5TMKIdY--jh8SMvAKqmq5KZS?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mWnDbDpnB2Lb1hCM16oJthUcxjEulPIyBEXEL8GfidkUrwN7kQrKI0ddZoXvyL_kOqhfAA7h38aO5YAfentTmMfo9fy1ObOxMTvjMCSFlTYo03ExxvqMVC0C6VsyN61OxxGpRfkOeIC1ZiBEu8TZqUUge4WgCXZ_ob6gqFwDILPsYCM0qcW594AeconmEtfFj?width=512&height=512&cropmode=none"];

  const channelLogos = ["https://dsm01pap007files.storage.live.com/y4mScDIIDm5ZYRnJYvjjuS4zOhdZdRyr4zvbbuahtHq7mqxcqhnCyf0ZGk8FExFbHbF9ovGLQPkcFNUqpNgD122hUOCGV-kcY3J_ts34qZ9f52XKqlYQu3FMQ_Lmm33CgZ6oGHe1_BxN58h-FMprYsWV4ztRg6E1pSbIt-HCgYBhlqcfkYhhgv80TpgFSQSnEq5?width=176&height=176&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mZRTUcvzOWgLkNjC03o9QIqzc0c2BxifHNCf1Q1-z-5---GPVanb7lB2ZOMh5RZEukPcv89O5zP_-MBU8PJEy5LrrUZlnVA2nTAR5EnRwMHn4x94gNsP__rt8ffuEtPNHyUHRuqkFK8yAbcl4QyuD6_vOZ0H-uLmC99O6x1aFtV2n3g3eQuJnLt1QHesC-aI6?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mhgziW9j39Fm7w9Q1O9n-8AqTEHUWancX3F4pAm-sBgNlbox9N74pe1TyTHC6aa2hDVPFG6BYkdAhGMLp-GwIPco5vyhpTGbAq-dSZdJHdpruReOZbeEBGILKyna5Sh6TkMQKgrj-Bmv3j5U5pNtcvjuowctBkliNI_jIjtLtpOG3VYPFnN7HXqXSctIqNR_S?width=176&height=176&cropmode=none", "https://dsm01pap007files.storage.live.com/y4m_lPPAlxHccjhvxNmX3RcBU8mXFf9abDjMIRt9MVI4S6iwhf0-4Sw82L42eGOFyKRJ4rz7rjUMcdqlDSpeVREyAqavtBYoS_6KfH7V_X1GnpW_GrtM9G_13h9kIJpJJsZlyNPuSA62S7M9uPzrMwOqvQmuRT1xf4T97VPQ2rmxwWXKWrJXeYT-az301Q2Yhhq?width=512&height=512&cropmode=none"]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexChannel, setCurrentIndexChannel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 3) % appLogos.length);
      setCurrentIndexChannel(currentIndexChannel => (currentIndexChannel + 3) % channelLogos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Soteria</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className={styles.part1_container}>
        <div className={styles.part1_wrapper}>
          <div className={styles.part1_text}>
            <div className={styles.part1_titles}>
              <h3 className={styles.part1_title}>
                For Myanmar
              </h3>
              <h3 className={styles.part1_title2}>
                From the world
              </h3>
            </div>

            <p className={styles.part1_paragraph}>
              Help us light up the future of Myanmar. Join our fight for justice and independence during our Spring Revolution. Stand in solidarity with the brave citizens of Myanmar, empowering them to rebuild and create a brighter tomorrow. Together, let's build a peaceful and prosperous Myanmar!
            </p>
          </div>
          <img src="https://onedrive.live.com/embed?resid=3616EC68410FC656%21735&authkey=%21AICjxZZrT0PObYI&width=1364&height=936" alt="" className={styles.part1_image} />
        </div>
      </div>

      <div className={styles.part2_container}>
        <div className={styles.padding}>
          <div className={styles.heading}>
            <h1 className={styles.heading_content}>On Feburary 2021, a tragic horrible event happened in a county in the Southeast Asia known as Myanmar</h1>
          </div>
          <div></div>
          <div className={styles.paragraph1}>
            <p >
              The year 2021 will forever be etched in Myanmar's history as a time of profound political turmoil and upheaval. On February 1st, the nation's fledgling democracy suffered a severe setback when the Myanmar military, also known as the Tatmadaw, executed a meticulously planned coup d'état. Under the pretext of alleged electoral fraud during the November 2020 general elections, the military seized power and deposed the civilian government led by Nobel laureate Aung San Suu Kyi.
            </p>
            <p>
              Aung San Suu Kyi, the charismatic leader of the National League for Democracy (NLD), and other prominent members of her party were detained in the pre-dawn hours, and the military immediately declared a state of emergency. The coup effectively nullified the results of the democratic elections that had overwhelmingly favored the NLD, which won a landslide victory, and renewed hope for Myanmar's path toward democracy after decades of military rule.
              In response to the military's brazen power grab, the people of Myanmar took to the streets in protest, demonstrating remarkable resilience and determination in their fight for democracy and civilian rule. The "Civil Disobedience Movement" (CDM) emerged as a powerful force of resistance, with public servants, healthcare workers, educators, and people from all walks of life participating in strikes and boycotts, crippling the functioning of various government institutions.
            </p>

          </div>
          <div className={styles.paragraph2}>
            <p>
              The protesters' demands were clear: the immediate release of the detained civilian leaders, the reinstatement of the elected government, and an end to military rule. Despite the largely peaceful nature of the demonstrations, the military responded with brutal force. Security forces employed live ammunition, tear gas, and arbitrary arrests to disperse the crowds, leading to numerous casualties and widespread human rights violations. The United Nations and human rights organizations documented reports of extrajudicial killings, disappearances, and sexual violence against protesters.
            </p>
            <p >
              As the months passed, the situation in Myanmar remained precarious, with the country experiencing a protracted struggle between a military intent on retaining power and a population fervently demanding democracy, human rights, and justice. The coup and subsequent protests exposed the complexities of Myanmar's political landscape, rooted in decades of military dominance and ethnic conflicts.
            </p>
            <p>
              The 2021 coup in Myanmar continues to be a defining chapter in the nation's history, leaving its people facing uncertainty and peril while bravely pursuing their aspirations for a democratic future. Amidst the darkness, they hold onto hope, resilience, and the belief that their collective struggle will ultimately pave the way for a more inclusive, peaceful, and prosperous Myanmar.
            </p>
          </div>
        </div>
      </div>

      {/* <div className={styles.part3_scroll}> */}
      <div className={styles.part3_container}>
        <div className={styles.part3_wrapper}>
          <div className={styles.title_div}>
            <span className={styles.title_span}>
              So what can we do now?
            </span>
          </div>
          <p className={styles.text}>
            Amidst the challenges in Myanmar, its talented and courageous people have devised ingenious ways to garner support. Innovative apps, captivating games, enlightening websites, empowering YouTube channels, and impactful campaigns offer diverse avenues to contribute. Each click, view, or donation plays a vital role in shaping a brighter future, fostering unity and hope among Myanmar's people. Embrace these opportunities to make a meaningful impact and stand together on the journey towards justice, liberty, and positive change.
          </p>
          <div className={styles.icons}>
            <AiOutlineAppstore className={styles.icon} onClick={() => scrollToSection('app')} />
            <CgGames className={styles.icon} onClick={() => scrollToSection('app')} />
            <BsGlobe2 className={styles.icon} onClick={() => scrollToSection('website')} />
            <AiOutlineYoutube className={styles.icon} onClick={() => scrollToSection('youtube')} />
            <BiDonateHeart className={styles.icon} onClick={() => scrollToSection('donation')} />
            <MdOutlineCampaign className={styles.icon} onClick={() => scrollToSection('donation')} />
          </div>
        </div>
      </div>

      <div id='app' className={styles.app}>
        <div className={styles.header}>
          <span className={styles.topic}>
            Apps & games
          </span>
        </div>

        <div className={styles.content}>
          <div className={styles.paragraph}>
            The best and most valuable way is to use apps and games created by our brilliant minds. In the 'Clicking apps' category, users can click on links to view content and see a few ads. It's fast and convenient, and clicking on these links is completely safe. Most of the links lead to valuable blogs created by our own community. Some popular apps in this category are Click to Donate, Thadin, Lattsaung, and many more.

            The second category is 'Games,' which may not show ads as quickly as clicking apps, but they offer entertainment and fun. Take a break from clicking and enjoy games like War Heroes, The PDF Game, Suyadanar, Nway Oo Candy, and more. These games are not only enjoyable but also profitable.

            To explore all available apps, click the 'Find all' button below. Start supporting Myanmar's future through these innovative creations by our talented developers.
          </div>
          <div className={styles.wrap}>
            <div className={styles.logos}>
              <img src={appLogos[(currentIndex + 0) % appLogos.length]} alt="" className={styles.logo} />
              <img src={appLogos[(currentIndex + 1) % appLogos.length]} alt="" className={styles.logo} />
              <img src={appLogos[(currentIndex + 2) % appLogos.length]} alt="" className={styles.logo} />
            </div>
          </div>
          <div className={styles.link}>
            -  <span className={styles.underline_link}> visit all websites</span>
          </div>
        </div>

      </div>

      <div id='website' className={styles.website}>
        <div className={styles.header}>
          <span className={styles.topic}>
            Websites
          </span>
        </div>
        <div className={styles.content_reverse}>
          <div className={styles.wrap} onMouseLeave={handleDisappear}>
            <Link href="/websites/weclick4pdf">
              <button className={`${styles.subicon} ${appear ? styles.appear : styles.none}`}>
                <span className={styles.texticon}>
                  weclick4pdf
                </span>
              </button>
            </Link>

            <img onMouseOver={handleAppear} src="https://dsm01pap007files.storage.live.com/y4mZRTUcvzOWgLkNjC03o9QIqzc0c2BxifHNCf1Q1-z-5---GPVanb7lB2ZOMh5RZEukPcv89O5zP_-MBU8PJEy5LrrUZlnVA2nTAR5EnRwMHn4x94gNsP__rt8ffuEtPNHyUHRuqkFK8yAbcl4QyuD6_vOZ0H-uLmC99O6x1aFtV2n3g3eQuJnLt1QHesC-aI6?width=512&height=512&cropmode=none" alt="" className={styles.logo_website} />

            <Link href="/websites/pyithubawa">
              <button className={`${styles.subicon} ${appear ? styles.appear : styles.none}`}>
                <span className={styles.texticon}>
                  pyithubawa
                </span>
              </button>
            </Link>
          </div>
          <div className={styles.paragraph}>
            Discover informative and engaging websites that make a positive impact on Myanmar's future. These websites curate a collection of educational and interesting posts that users can read while supporting meaningful causes. By simply browsing through these posts, users generate revenue through ads, which is then utilized to aid various charitable endeavors. Every click matters, as it contributes to the betterment of communities in need. Join us in this journey of knowledge and compassion as we strive to build a brighter tomorrow for Myanmar. Explore these websites today and make a difference with every minute of viewing.
            {/* <div className={styles.group}> */}

            {/* </div> */}
          </div>
          <div></div>
          <Link href="/websites" className={styles.link_reverse}>
            - <span className={styles.underline_link}> visit all websites</span>
          </Link>
        </div>
      </div>

      <div id='youtube' className={styles.youtube}>
        <div className={styles.header}>
          <span className={styles.topic}>
            Youtube channels
          </span>
        </div>
        <div className={styles.content}>
          <div className={styles.paragraph}>
            Embark on an empowering journey through YouTube channels dedicated to supporting Myanmar's youth in their fight against the coup. These channels offer a diverse range of content, from soul-stirring music and captivating audiobooks to thought-provoking podcasts and mesmerizing films. These channels have become beacons of hope, providing not only entertainment but also fostering a sense of resilience and unity. As you engage with their compelling content, you play an instrumental role in empowering Myanmar's youth. Every view, like, and share contributes to the collective endeavor of forging a better future, empowering voices, and amplifying stories that need to be heard.
          </div>
          <div className={styles.wrap}>
            <div className={styles.logos}>
              <img src={channelLogos[(currentIndexChannel + 0) % channelLogos.length]} alt="" className={styles.logo} />
              <img src={channelLogos[(currentIndexChannel + 1) % channelLogos.length]} alt="" className={styles.logo} />
              <img src={channelLogos[(currentIndexChannel + 2) % channelLogos.length]} alt="" className={styles.logo} />
            </div>
          </div>
          <Link href="/youtube" className={styles.link}>
            - <span className={styles.underline_link}>view all channels</span>
          </Link>
        </div>
      </div>

      <div id='donation' className={styles.donations}>
        <div className={styles.header}>
          <span className={styles.topic}>
            Donations & Campaigns
          </span>
        </div>
        <div className={styles.content_reverse}>
          <div className={styles.wrap}>
            <div className={styles.logos}>
              <img src={appLogos[(currentIndex + 0) % appLogos.length]} alt="" className={styles.logo} />
              <img src={appLogos[(currentIndex + 1) % appLogos.length]} alt="" className={styles.logo} />
              <img src={appLogos[(currentIndex + 2) % appLogos.length]} alt="" className={styles.logo} />
            </div>
          </div>
          <div className={styles.paragraph}>
            In the realm of donations and campaigns, individuals and organizations come together to offer crucial aid for a myriad of causes in Myanmar. From weaponry, supplies, and food to medicine, books, and financial support, these initiatives fortify the People's Defense Forces (PDFs), Civil Disobedience Movement (CDM) participants, and war victims. Donations serve as enduring posts, allowing continuous contributions to sustain vital efforts and make a lasting impact. Meanwhile, campaigns add an engaging twist, enticing supporters with prizes and lottery participation, all while ensuring every contribution is directed to where it is needed most. Transparency and trust underpin these endeavors, as each act of giving becomes a powerful force for unity, hope, and resilience in Myanmar's journey towards a brighter future.
          </div>
          <div></div>
          <div className={styles.link_wrapper}>
            <Link href="/donations" className={styles.link_reverse}>
              - <span className={styles.underline_link}>view all donations</span>
            </Link>
            <Link href="/campaigns" className={styles.link_reverse}>
              - <span className={styles.underline_link}>view all campaigns</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
