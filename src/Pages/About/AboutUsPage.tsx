import { Text } from "@fluentui/react";
import { WithNavbar } from 'Components';
import React, { FunctionComponent as Component } from "react";
import { connect } from "react-redux";
import { GlobalProps, mapDispatchToProps, mapStateToProps } from "Redux/Map";
import { DEFAULT_ARTICLE_IMAGE } from "Utils/constants";
import './AboutUsPage.scss';

const AboutUsPage: Component<GlobalProps> = (props: GlobalProps) => {
  return (
    <WithNavbar>
      <main>

        <Text className='heading' block>
          Tentang Kami
        </Text>

        {/* Image */}
        <img
          src={DEFAULT_ARTICLE_IMAGE}
          alt={`Image of Tortomi`}
          className='image'
        />

        <Text className='value' block>
          Tortomi adalah pusat informasi tentang kura-kura dan salah satu yang terbaik di Indonesia. Tortomi berdiri pada tahun 2020 di Surabaya dengan tujuan awal ingin menyediakan informasi dengan mudah tentang cara mengobati berbagai penyakit pada kura-kura.
        </Text>

      </main>
    </WithNavbar>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(
  AboutUsPage
);