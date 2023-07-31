import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineAppstore, AiOutlineYoutube } from "react-icons/ai";
import { CgGames } from "react-icons/cg"
import { BiDonateHeart } from "react-icons/bi";
import { MdOutlineCampaign } from "react-icons/md"
import styles from '../styles/Home.module.css'

export default function Home() {
  const [appear, setAppear] = useState(false);

  const handleAppear = () => {
    setAppear(true);
  }

  const handleDisappear = () => {
    setAppear(false);
  }

  const images = ["https://dsm01pap007files.storage.live.com/y4m_lPPAlxHccjhvxNmX3RcBU8mXFf9abDjMIRt9MVI4S6iwhf0-4Sw82L42eGOFyKRJ4rz7rjUMcdqlDSpeVREyAqavtBYoS_6KfH7V_X1GnpW_GrtM9G_13h9kIJpJJsZlyNPuSA62S7M9uPzrMwOqvQmuRT1xf4T97VPQ2rmxwWXKWrJXeYT-az301Q2Yhhq?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mLzSog6BA8kX03-5J9J0Ok0c4I5ytl8AG0HI7on7CqEfBr9xhXvGMwUW8ZixpCRIgPXbX-l_1Pja1_qJ1_aEvTThu4S7EAAT_6IuAGuiBFDTbA4m_z8vpnSwTpWA_abe8-by9VA6DFQD1hn6SXrAVAl0UyE3gFw6K0xGsCfmW_fvB-f0mDQaKMwSKrPiqfiNe?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mQXuVsVaTz3HIXSgWiPIbzlem9VctOz90pnJtBJ5dvFsXrtoikd_jgi5UVltn_5qvWheo3ZboJHgWiVBi2a25edUwnQN0LVmv3KuBGJuA8VIqb8DbgfBbdAJNifo8micVPGByh_sflob6fLAxxcB8i7LCh3HKc0SBXrMVYJFWiWZz8LB79Ldzzp8xzy-uXDIw?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4m5oUiKnVUoAiMp_RIcQ1ee_LE1lG7YY-aBsVAlZkWcMyJduOVAHZJaaKdwqbjs18nNoMyBYgfTvu2IZ3BTJm9mAXS2GoY7qPNrNvdVmonQuC-uKIGd4CYQAACgSTuIlL4LzwiG7f-ncADRKIWF4-HW_01zBBECgvt563oCqKz8qvGM0RGHeKK95IodNzxSOHX?width=240&height=240&cropmode=none", "https://dsm01pap007files.storage.live.com/y4moXIbkwbNy4rIhKjvqgXxGKeDoLdwaAcQbUSlQOvNJNe47-OtmRVPmmdtW1-XYSQPnE8kHae7LF0jDDAHhUfS0hvuCHJFEtOh2HRjQ69P6wUFCTt6FvDs1OjT64gkjud_mojMmp3zUiWaZSSIrqxDzprTrj_3qdmeZdS86Rzmy_cF04Lt1lBrLY7trnrAT-Qa?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mnImozbjUys7TL6GkWJHYom3F87lsu1zQ11TiQKI92lQTWxMP5SF3GPXW-hi2C6JaWmYA8i1-V2BTkF83wxOaCeDLTjeHDyJbdXjfislct2wLROWAN4q0K75vM2L-evyxdVwAacH3D4qSMWyalOw6MVATMkmmz5rtdfQgQJFUHe9RuQHqnXW8t5DflyWAn3a1?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4m3PtvGMeHDWlpxypicWd8lkTBBqGIcgEzZIhsgLrzK0kCTdrgwCLhGcSJVnJyj7Uk1xiixc29v4xuQsFAEMEdYrNbkUPh_nmiWQl4rP8gngOCjNhhHVc5bPxEuMrkjBGAB2zIZVvC302pypRu8UY0WUcx64T2BxiN9DUGedGm9nwaCkLYtxGk1bHGWq_dJK4V?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mCt6eTIeOA2-w1pdmH6SDD-ZZ_K-296GpK4QoNJPeWxVdBTpBJFpW03rWyzxtR6e1rk26DL5-tcgkybap4Q0gzEcLcS2pFUfIGICLCIdS4QWELP8yEYrqAqf4PdsOzvQQX3YUE2F380QPbDQth3RM71TabpiwOW8RGrzyZ1YH5TMKIdY--jh8SMvAKqmq5KZS?width=512&height=512&cropmode=none", "https://dsm01pap007files.storage.live.com/y4mWnDbDpnB2Lb1hCM16oJthUcxjEulPIyBEXEL8GfidkUrwN7kQrKI0ddZoXvyL_kOqhfAA7h38aO5YAfentTmMfo9fy1ObOxMTvjMCSFlTYo03ExxvqMVC0C6VsyN61OxxGpRfkOeIC1ZiBEu8TZqUUge4WgCXZ_ob6gqFwDILPsYCM0qcW594AeconmEtfFj?width=512&height=512&cropmode=none"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex > images.length - 1) {
        setCurrentIndex(0);
      }
      else {
        setCurrentIndex(currentIndex + 3);
      }
    }, 3000)

    // return () => clearInterval(intervalId);
  }, [currentIndex])
  // const myRef = useRef([]);
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     // const entry = entries[0];
  //     // if (entry.isIntersecting) {
  //     //   setShow(true)
  //     // } else {
  //     //   setShow(false)
  //     // }

  //     entries.forEach((entry) => {
  //       console.log(entry);
  //       if (entry.isIntersecting) {
  //         setShow(true)
  //       } else {
  //         setShow(false)
  //       }
  //       console.log(show)
  //     })
  //   })
  //   myRef.current.forEach((ref) => {
  //     observer.observe(ref.current)
  //     console.log(ref)
  //   })

  // }, [])
  // console.log(myRef)

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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus recusandae libero alias maiores dolorem voluptatem cum harum quasi explicabo quod praesentium labore reiciendis possimus rem soluta accusamus aliquam dolores.
              Corrupti, ullam laborum corporis sapiente recusandae odio harum beatae vel illum pariatur illo modi reprehenderit laudantium magni, dicta vero molestias perferendis? Quis inventore, officiis cupiditate explicabo vero consequatur iste deserunt.
            </p>
            <p>
              Soluta possimus repellendus ad pariatur et aut? Asperiores earum eveniet accusantium vero excepturi, reiciendis laborum rerum distinctio ratione totam, cum maiores tempore explicabo voluptatum pariatur vitae odit neque nesciunt mollitia.
              Aperiam, quaerat. Vero, deserunt officiis cumque iste cupiditate accusantium omnis minus expedita corrupti ea perferendis facilis cum commodi fugiat, quaerat laudantium nam quos molestias dolorem ullam ipsam, reiciendis vel! Aliquam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam beatae iusto tenetur incidunt, enim labore, atque ipsam maiores earum neque distinctio, blanditiis adipisci velit libero expedita iure. Voluptas, nihil dolore.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum consectetur excepturi, pariatur nisi inventore odio iure beatae labore? Beatae ipsum vitae nam numquam sit aut voluptatum expedita quod repellendus sapiente?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, id recusandae! Maxime minima ducimus, quod assumenda unde quos rerum dolores nisi esse. Exercitationem quo, aliquam repellat error blanditiis nostrum ex?
            </p>
          </div>
          <div className={styles.paragraph2}>
            <p >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vero eius sint dolores, similique minima repellendus harum, sunt alias libero quaerat aliquid ad itaque facere quas consequuntur animi perferendis porro!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, repellat esse porro laudantium sit qui quisquam. Saepe quaerat, placeat nemo magni officia inventore doloribus reiciendis aliquam temporibus nostrum sint totam.
            </p>
            <p>
              Soluta possimus repellendus ad pariatur et aut? Asperiores earum eveniet accusantium vero excepturi, reiciendis laborum rerum distinctio ratione totam, cum maiores tempore explicabo voluptatum pariatur vitae odit neque nesciunt mollitia.
              Aperiam, quaerat. Vero, deserunt officiis cumque iste cupiditate accusantium omnis minus expedita corrupti ea perferendis facilis cum commodi fugiat, quaerat laudantium nam quos molestias dolorem ullam ipsam, reiciendis vel! Aliquam.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad fugit quas illo aut. Exercitationem quia dicta, totam amet at magnam sint iusto illum sunt unde, consequatur ipsa facilis, suscipit et.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat molestiae aspernatur doloribus dolorum quas maxime possimus, laudantium reprehenderit, delectus ea inventore veniam ratione minima tempore, officiis accusamus fugit mollitia quia!
              Reiciendis, amet perspiciatis expedita odio, autem soluta temporibus iusto neque, impedit eos vero ipsam pariatur suscipit architecto doloribus at. Similique dolores amet necessitatibus possimus voluptatem iste quos quo quidem illo.
            </p>
          </div>
        </div>
      </div>

      {/* <div className={styles.snap}> */}
      <div className={styles.part3_container}>
        <div className={styles.title_div}>
          <span className={styles.title_span}>
            So what can we do now?
          </span>
        </div>
        <p className={styles.text}>
          Fortunately, lots of talented and courgeous people here have invented many ways to get much help as possible. These includes apps, games, websites, youtube channels, donations, campaigns and many more.
        </p>
        <div className={styles.icons}>
          <AiOutlineAppstore className={styles.icon} />
          <CgGames className={styles.icon} />
          <BsGlobe2 className={styles.icon} />
          <AiOutlineYoutube className={styles.icon} />
          <BiDonateHeart className={styles.icon} />
          <MdOutlineCampaign className={styles.icon} />
        </div>
      </div>
      <div className={styles.app}>
        <div className={styles.header}>
          <span className={styles.topic}>
            Apps and games
          </span>
        </div>

        <div className={styles.content}>
          <div className={styles.paragraph}>
            {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eveniet quod saepe, minima ut natus. Expedita tempore eligendi aliquid inventore, aperiam id? Eius impedit aspernatur necessitatibus expedita nobis nemo ipsa?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore quae aperiam voluptas ipsum quasi earum amet quibusdam? Sapiente aspernatur quidem blanditiis dolorem illum ut commodi beatae aperiam aut magnam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dolores non saepe perferendis, soluta voluptates adipisci fugiat ducimus ratione sunt est sed blanditiis id. Magni eos perferendis rem neque nam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores beatae ipsum fugit doloribus dolore reprehenderit dolor enim nihil ratione? Eveniet quasi voluptatem adipisci eos, asperiores nesciunt nihil libero consequuntur quis. */}
            The best and the most valuable way is by using apps and games created by genius bright minds here. The first category is 'Clicking apps' which contain contents or links that users can click to view the content and an ad or two after. These apps are the most valuable beacuase of the fast pace and convenient of just clicking on links. Don't worry it is 100% safe to click on them and most just link to blogs made by our own which are even valuable to read. These apps include: Click to Donate, Thadin, Lattsaung and many more.
            Another category is 'Games'. Games are not as fast as clicking apps in getting ads but they are fun. After clicking a while, go on and play some games to relax your mind. They are both fun and profitable. These games include shooting games such as War Heroes, The PDF Game and fun and adventurous games such as Suyadanar, Nway Oo Candy and many many more.
            You can see all available apps by clicking 'Find all' button below.

          </div>
          <div className={styles.wrap}>
            <div className={styles.logos}>
              <img src={images[currentIndex]} alt="" className={styles.logo} />
              <img src={images[currentIndex + 1]} alt="" className={styles.logo} />
              <img src={images[currentIndex + 2]} alt="" className={styles.logo} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.website}>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eveniet quod saepe, minima ut natus. Expedita tempore eligendi aliquid inventore, aperiam id? Eius impedit aspernatur necessitatibus expedita nobis nemo ipsa?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore quae aperiam voluptas ipsum quasi earum amet quibusdam? Sapiente aspernatur quidem blanditiis dolorem illum ut commodi beatae aperiam aut magnam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dolores non saepe perferendis, soluta voluptates adipisci fugiat ducimus ratione sunt est sed blanditiis id. Magni eos perferendis rem neque nam?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nobis nulla accusantium vero necessitatibus vitae sint placeat hic earum incidunt aperiam nisi, atque assumenda consectetur mollitia voluptatum ex? Dignissimos, ipsam!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia earum esse aliquam nisi ipsum rerum tenetur, omnis culpa fuga laudantium veritatis repudiandae doloribus beatae modi. Optio sapiente quae quibusdam alias.
            <div className={styles.group}>
              <Link href="/websites">
                <button className={styles.visit_btn}>visit all websites</button>
              </Link>
              <button className={styles.visit_btn}>learn more here</button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.youtube}>
        <div className={styles.header}>
          <span className={styles.topic}>
            Youtube channels
          </span>
        </div>
        <div className={styles.content}>
          <div className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum eveniet quod saepe, minima ut natus. Expedita tempore eligendi aliquid inventore, aperiam id? Eius impedit aspernatur necessitatibus expedita nobis nemo ipsa?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore quae aperiam voluptas ipsum quasi earum amet quibusdam? Sapiente aspernatur quidem blanditiis dolorem illum ut commodi beatae aperiam aut magnam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat dolores non saepe perferendis, soluta voluptates adipisci fugiat ducimus ratione sunt est sed blanditiis id. Magni eos perferendis rem neque nam?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores beatae ipsum fugit doloribus dolore reprehenderit dolor enim nihil ratione? Eveniet quasi voluptatem adipisci eos, asperiores nesciunt nihil libero consequuntur quis.
            <div className={styles.group}>
              <Link href="/youtube">
                <button className={styles.visit_btn}>visit all channels</button>
              </Link>
              <button className={styles.visit_btn}>learn more here</button>
            </div>
          </div>
          <div className={styles.wrap}>
            <div className={styles.logos}>
              <img src="https://dsm01pap007files.storage.live.com/y4mScDIIDm5ZYRnJYvjjuS4zOhdZdRyr4zvbbuahtHq7mqxcqhnCyf0ZGk8FExFbHbF9ovGLQPkcFNUqpNgD122hUOCGV-kcY3J_ts34qZ9f52XKqlYQu3FMQ_Lmm33CgZ6oGHe1_BxN58h-FMprYsWV4ztRg6E1pSbIt-HCgYBhlqcfkYhhgv80TpgFSQSnEq5?width=176&height=176&cropmode=none" alt="" className={styles.logo} />
              <img src="https://dsm01pap007files.storage.live.com/y4mZRTUcvzOWgLkNjC03o9QIqzc0c2BxifHNCf1Q1-z-5---GPVanb7lB2ZOMh5RZEukPcv89O5zP_-MBU8PJEy5LrrUZlnVA2nTAR5EnRwMHn4x94gNsP__rt8ffuEtPNHyUHRuqkFK8yAbcl4QyuD6_vOZ0H-uLmC99O6x1aFtV2n3g3eQuJnLt1QHesC-aI6?width=512&height=512&cropmode=none" alt="" className={styles.logo} />
              <img src="https://dsm01pap007files.storage.live.com/y4mhgziW9j39Fm7w9Q1O9n-8AqTEHUWancX3F4pAm-sBgNlbox9N74pe1TyTHC6aa2hDVPFG6BYkdAhGMLp-GwIPco5vyhpTGbAq-dSZdJHdpruReOZbeEBGILKyna5Sh6TkMQKgrj-Bmv3j5U5pNtcvjuowctBkliNI_jIjtLtpOG3VYPFnN7HXqXSctIqNR_S?width=176&height=176&cropmode=none" alt="" className={styles.logo} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.donations}>
        <div className={styles.header}>
          <span className={styles.topic}>
            Donations
          </span>
        </div>
      </div>
    </div>

    // </div>
  )
}
