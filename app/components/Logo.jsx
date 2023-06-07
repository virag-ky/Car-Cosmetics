import Image from "next/image";

const Logo = ({ styles }) => {
  return (
    <div className={styles.logo_container}>
      <div className={styles.image} id={styles.car_logo}>
        <Image src="/logo/logo_car.png" alt="car logo" fill={true} />
      </div>
      {/* <div className={styles.image} id={styles.text_logo}>
        <Image src="/logo/logo_text.png" alt="text logo" fill={true} />
      </div> */}
    </div>
  );
};

export default Logo;
