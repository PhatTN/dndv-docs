import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  href: string | null;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Tư vấn 1-1",
    href: "/tu-van/danh-cho-mentor/huong-dan-dang-ky",
    Svg: require("@site/static/img/consulting.svg").default,
    description: (
      <>
        Dành cho Mentor và Mentee. Hướng dẫn tạo tài khoản, tìm Mentor, đặt lịch
        và thanh toán...
      </>
    ),
  },
  {
    title: "Tìm việc",
    href: null,
    Svg: require("@site/static/img/seeking-jobs.svg").default,
    description: (
      <>
        Cách tìm việc làm, ứng tuyển, bật Open to Work, và sử dụng các giải pháp
        việc làm khác trên dungnguoidungviec.com
      </>
    ),
  },
  {
    title: "Tuyển dụng",
    href: null,
    Svg: require("@site/static/img/recruitment.svg").default,
    description: (
      <>
        Dành cho người tuyển dụng và doanh nghiệp muốn tìm kiếm ứng viên miễn
        phí, đăng tin tuyển dụng, ...
      </>
    ),
  },
];

function Feature({ title, href, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        {href ? (
          <Link href={href}>
            <Heading as="h3">{title}</Heading>
          </Link>
        ) : (
          <Heading as="h3">{title}</Heading>
        )}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
