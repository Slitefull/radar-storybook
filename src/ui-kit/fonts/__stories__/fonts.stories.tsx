import { Fragment } from 'react';


export default {
  title: 'fonts/Fonts',
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=762%3A9707",
    },
  }
};

const menloRegularStyles = { fontFamily: "Menlo", fontSize: 25 };
const menloItalicStyles = { fontFamily: "Menlo", fontSize: 25, fontStyle: "italic" };
const freightSansProRegularStyles = { fontFamily: "FreightSans Pro", fontSize: 25 };
const freightSansProItalicStyles = { fontFamily: "FreightSans Pro", fontSize: 25, fontStyle: "italic" };

const MenloTemplate = () => {
  return (
    <Fragment>
      <fieldset style={{ padding: 10 }}>
        <legend style={{ fontSize: 40 }}>Menlo Regular:</legend>
        <h1 style={{ ...menloRegularStyles, fontWeight: 100 }}>100 weight</h1>
        <h1 style={{ ...menloRegularStyles, fontWeight: 200 }}>200 weight</h1>
        <h1 style={{ ...menloRegularStyles, fontWeight: 300 }}>300 weight</h1>
        <h1 style={{ ...menloRegularStyles, fontWeight: 400 }}>400 weight</h1>
        <h1 style={{ ...menloRegularStyles, fontWeight: 500 }}>500 weight</h1>
        <h1 style={{ ...menloRegularStyles, fontWeight: 600 }}>600 weight</h1>
        <h1 style={{ ...menloRegularStyles, fontWeight: 700 }}>700 weight</h1>
        <h1 style={{ ...menloRegularStyles, fontWeight: 800 }}>800 weight</h1>
      </fieldset>

      <fieldset style={{ padding: 10 }}>
        <legend style={{ fontSize: 40 }}>Menlo Italic:</legend>
        <h1 style={{ ...menloItalicStyles, fontWeight: 100 }}>100 weight</h1>
        <h1 style={{ ...menloItalicStyles, fontWeight: 200 }}>200 weight</h1>
        <h1 style={{ ...menloItalicStyles, fontWeight: 300 }}>300 weight</h1>
        <h1 style={{ ...menloItalicStyles, fontWeight: 400 }}>400 weight</h1>
        <h1 style={{ ...menloItalicStyles, fontWeight: 500 }}>500 weight</h1>
        <h1 style={{ ...menloItalicStyles, fontWeight: 600 }}>600 weight</h1>
        <h1 style={{ ...menloItalicStyles, fontWeight: 700 }}>700 weight</h1>
        <h1 style={{ ...menloItalicStyles, fontWeight: 800 }}>800 weight</h1>
      </fieldset>
    </Fragment>
  );
};

const FreightSansProTemplate = () => {
  return (
    <Fragment>
      <fieldset style={{ padding: 10 }}>
        <legend style={{ fontSize: 40 }}>FreightSans Pro Regular:</legend>
        <h1 style={{ ...freightSansProRegularStyles, fontWeight: 100 }}>100 weight</h1>
        <h1 style={{ ...freightSansProRegularStyles, fontWeight: 200 }}>200 weight</h1>
        <h1 style={{ ...freightSansProRegularStyles, fontWeight: 300 }}>300 weight</h1>
        <h1 style={{ ...freightSansProRegularStyles, fontWeight: 400 }}>400 weight</h1>
        <h1 style={{ ...freightSansProRegularStyles, fontWeight: 500 }}>500 weight</h1>
        <h1 style={{ ...freightSansProRegularStyles, fontWeight: 600 }}>600 weight</h1>
        <h1 style={{ ...freightSansProRegularStyles, fontWeight: 700 }}>700 weight</h1>
        <h1 style={{ ...freightSansProRegularStyles, fontWeight: 800 }}>800 weight</h1>
      </fieldset>

      <fieldset style={{ padding: 10 }}>
        <legend style={{ fontSize: 40 }}>FreightSans Pro Italic:</legend>
        <h1 style={{ ...freightSansProItalicStyles, fontWeight: 100 }}>100 weight</h1>
        <h1 style={{ ...freightSansProItalicStyles, fontWeight: 200 }}>200 weight</h1>
        <h1 style={{ ...freightSansProItalicStyles, fontWeight: 300 }}>300 weight</h1>
        <h1 style={{ ...freightSansProItalicStyles, fontWeight: 400 }}>400 weight</h1>
        <h1 style={{ ...freightSansProItalicStyles, fontWeight: 500 }}>500 weight</h1>
        <h1 style={{ ...freightSansProItalicStyles, fontWeight: 600 }}>600 weight</h1>
        <h1 style={{ ...freightSansProItalicStyles, fontWeight: 700 }}>700 weight</h1>
        <h1 style={{ ...freightSansProItalicStyles, fontWeight: 800 }}>800 weight</h1>
      </fieldset>
    </Fragment>
  );
};

export const FreightSansPro = FreightSansProTemplate.bind({});
export const Menlo = MenloTemplate.bind({});
