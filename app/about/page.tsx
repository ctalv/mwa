import Image from "next/image";
import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.about}>
      <div className={styles.general}>
        <p>
          Need some values, the kind of work you do, maybe a few pictures. Note to self: we can also do like a gallery transition thing on the homepages and maybe here too?
        </p>
      </div>
      <div className={styles.people}>
      <h2>Leadership</h2>
        <div className={styles.leadership}>
          <div className={styles.profile}>
            <div>
            <h3>Matthew Mitchell</h3>
            <h4>Owner and Founding Principal</h4>
            <Image
              className={styles.headshot}
              src="/matthew.jpg"
              alt="Splash image placeholder"
              width={1000}
              height={1000}
              priority
            />
            </div>
            <div className={styles.description}>
            <p>
              Matthew Mitchell started his collegiate path in civil engineering close to his hometown of Fayetteville, NC and learned quickly that his true interest was designing projects. At the time, he had family living in Texas and the architecture program at University of Houston became the best option for his long term goals. After graduation in 2006, Matthew worked at several boutique firms in Houston doing high-end residential design including Jay Baker Architects, Curtis Windham Architects and Robert Griffin Architects. This variety of professional experience proved valuable in his development in many different styles of Architecture Design. After many years of developing under fellow mentors and with peers, he made the decision to open a practice. Matthew is a former President of the UH Architecture Alumni, avid hunter and foodie, and a proud Father and Husband.
            </p>
            </div>
          </div>
          <div className={styles.profile}>
          <div>
            <h3>Austin Wilson</h3>
            <h4>Associate Principal</h4>
            <Image
              className={styles.headshot}
              src="/austin.jpg"
              alt="Splash image placeholder"
              width={1000}
              height={1000}
              priority
            />
            </div>
            <p className={styles.description}>
              Austin Wilson is Associate Principal at Matthew Mitchell Architecture. He graduated with a Masters in Architecture with a Professional Degree in Urban and Community Studies in 2011 from Texas Tech University. Prior to joining Matthew Mitchell Architecture, Austin was at Curtis & Windham Architects for many years, where he developed his passion for traditional and classical architecture, managed a number of award winning projects and overlapped with Matthew Mitchell as colleagues. Austin later owned and operated a survey company that digitally recorded historic residences, giving him the opportunity to document a wide range of architecture while renovating some for sale. During this time, he documented a house for Matthew and the friendship was redeveloped, eventually resulting in Austin joining the team in 2019 as employee number one. Austin serves as the Texas President for the Institute of Classical Architecture and Art. He also serves as instructor for the National ICAA chapter; previously instructing at the Summer Studio in New York, Regional Intensives and numerous Workshops nationwide and part of the prestigious group of Fellows. Born and raised in Arlington, Texas, Austin enjoys spending time with his family of five, traveling, golfing, and enjoying the outdoors.
            </p>
          </div>
        </div>
        <h2>Team</h2>
        <div className={styles.team}>
          <div>
            <div>
              <div className={styles.profile}>
                <div>
                <h3>Warren Alverson</h3>
                <h4>Associate</h4>
                <Image
                  className={styles.headshot}
                  src="/warren.jpg"
                  alt="Splash image placeholder"
                  width={1000}
                  height={1000}
                  priority
                />
                </div>
                <p className={styles.description}>
                  Warren Alverson graduated with a Professional Bachelor’s degree in Architecture from the University of Houston, and produced an undergraduate thesis centered around design in Houston and Coastal Texas. Warren has experience in commercial and residential architecture in Houston and Galveston. In his free time, Warren designs and builds furniture for himself and his family. He also enjoys vacationing at National Parks and abroad with his wife, kayak fishing in the Texas bays, and spending time with his family and friends.
                </p>
              </div>
              <div className={styles.profile}>
              <div>
                <h3>Emilia Cavallaro</h3>
                <h4>Associate</h4>
                <Image
                  className={styles.headshot}
                  src="/emilia.jpg"
                  alt="Splash image placeholder"
                  width={1000}
                  height={1000}
                  priority
                />
                </div>
                <p className={styles.description}>
                  Emilia Cavallaro earned her Bachelor of Architecture degree at Rice University in Houston, Texas, and has experience working in residential and commercial design in Houston and New York. Emilia has a particular interest in residential and interior design, as well as painting and art curation. She and her husband enjoy traveling, cooking different cuisines, and spending time with their two cats.
                </p>
              </div>
              <div className={styles.profile}>
              <div>
                <h3>Meagan Dinh</h3>
                <h4>Associate</h4>
                <Image
                  className={styles.headshot}
                  src="/meagan.jpg"
                  alt="Splash image placeholder"
                  width={1000}
                  height={1000}
                  priority
                />
                </div>
                <p className={styles.description}>
                  Meagan Dinh joined Matthew Mitchell Architecture as an intern in 2021. She received her Master’s in Land and Property Development at Texas A&M University in 2022, where she gained knowledge in the real estate industry, community design, and construction development. Her study abroad experience in 2020 in Italy fostered her interest in residential design and its resulting effect in community development. While born and raised in Texas, she enjoys traveling the world, spending time with her family and baking for her community.
                </p>
              </div>
              <div className={styles.profile}>
              <div>
                <h3>Elvia Melendez</h3>
                <h4>Associate</h4>
                <Image
                  className={styles.headshot}
                  src="/elvia.jpg"
                  alt="Splash image placeholder"
                  width={1000}
                  height={1000}
                  priority
                />
                </div>
                <p className={styles.description}>
                  Elvia Melendez joined Matthew Mitchell Architecture in 2021 as an Architectural Associate. She is a Houston native with roots to Mexico who graduated from the University of Houston in 2020 with a Bachelors in Architecture. Her interest in architecture design springs from her eagerness to learn, she is particularly fond of art and history. With these as her foundation, she has become an avid traveler, using her new surroundings as an opportunity to learn and incorporate the new found knowledge into her own work. In her spare time, when she's not planning her next adventure, she enjoys walking her dogs, reading books, going to concerts, catching up with friends, and being in the company of her family.
                </p>
              </div>
              <div className={styles.profile}>
              <div>
                <h3>Tiffany Tetlow</h3>
                <h4>Virtual Assistant</h4>
                <Image
                  className={styles.headshot}
                  src="/tiffany.jpg"
                  alt="Splash image placeholder"
                  width={1000}
                  height={1000}
                  priority
                />
                </div>
                <p className={styles.description}>
                  Tiffany Tetlow is a native of North Carolina and brings a wealth of administrative experience. With 14 years of administrative expertise working with notable organizations such as Fort Bragg FCU and East Carolina University, she allows organizations to thrive as she takes care of essential details and tasks.
                  As a Virtual Assistant at Matthew Mitchell Architecture, Tiffany brings a wide array of skills and responsibilities to her role. With expertise in bookkeeping, time keeping, invoicing, and completion of proposals, she ensures smooth operations. Tiffany's exceptional organizational abilities, technical prowess, and effective communication contribute significantly to the success of Matthew Mitchell Architecture, ensuring efficient processes that support the company's overall growth and achievement.
                  On the weekends, she can be found cheering on her daughter from the sidelines of soccer fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}