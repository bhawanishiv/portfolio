import React, { useEffect, useState } from 'react';

const AnimatedLogo = (props) => {
  const { trigger, duration, onDone } = props;

  const [done, setDone] = useState(false);

  const styleObject = `
  #eQShFem6bWR4_to {
    animation: eQShFem6bWR4_to__to ${duration}ms linear 1 normal forwards
  }
  
  @keyframes eQShFem6bWR4_to__to {
    0% {
      transform: translate(54.604896px, 67.82145px)
    }
  
    20% {
      transform: translate(54.604896px, 67.82145px)
    }
  
    33.333333% {
      transform: translate(233.265434px, 67.82145px)
    }
  
    100% {
      transform: translate(233.265434px, 67.82145px)
    }
  }
  
  #eQShFem6bWR29_to {
    animation: eQShFem6bWR29_to__to ${duration}ms linear 1 normal forwards
  }
  
  @keyframes eQShFem6bWR29_to__to {
    0% {
      transform: translate(113.754921px, 49.744851px)
    }
  
    20% {
      transform: translate(113.754921px, 49.744851px)
    }
  
    33.333333% {
      transform: translate(-58px, 49.744851px)
    }
  
    100% {
      transform: translate(-58px, 49.744851px)
    }
  }
  
  #eQShFem6bWR30_to {
    animation: eQShFem6bWR30_to__to ${duration}ms linear 1 normal forwards
  }
  
  @keyframes eQShFem6bWR30_to__to {
    0% {
      transform: translate(203.999997px, 49.999996px)
    }
  
    20% {
      transform: translate(203.999997px, 49.999996px)
    }
  
    33.333333% {
      transform: translate(30px, 49.999996px)
    }
  
    100% {
      transform: translate(30px, 49.999996px)
    }
  }
  
 
  
  `;
  const renderAnimatedLogo = () => (
    <svg
      id="eQShFem6bWR1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 408 100"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
    >
      {!done && trigger && <style>{styleObject}</style>}
      <style>{` .back-holder{fill:var(--app-sys-color-background);}`}</style>
      <g clipPath="url(#eQShFem6bWR31)">
        <g>
          <g id="eQShFem6bWR4_to" transform="translate(54.604896,67.82145)">
            <g transform="translate(-233.265434,-67.821449)">
              <g transform="translate(0 0.000001)">
                <path
                  d="M62.653,28.9795l-3.4694,2.8572v30.4592v30.4592l3.4694,3.1122l3.4183,3.1122.2552-16.9898c.3061-18.7755.3061-18.8265,3.6734-20.5612c2.1429-1.1224,5.6633-.7143,7.398.8674c2.5,2.3469,2.7041,3.5204,2.7041,17.2449v12.704l3.3163,3.6225l3.3163,3.6224.1531-11.0714c.153-15.9183-.051-23.0612-.7143-25.5612-.7653-2.8571-4.3367-6.7857-7.449-8.2653-1.9898-.9184-3.0102-1.0714-6.2245-.8674-2.1428.1021-4.3877.4082-5,.6123l-1.1734.3571-.1021-14.2857-.1531-14.2347-3.4183,2.8061Zm2.1428,15.0511v13.9796l2.9592-1.4796c2.5-1.3266,3.3163-1.4796,5.9694-1.2755c3.6225.2551,5.6633,1.1734,8.1633,3.7755c3.0102,3.1122,3.3163,5.051,3.3163,21.1734c0,7.8062-.2041,14.1837-.4082,14.1837-.2551,0-.9693-.6122-1.6836-1.3265-1.2245-1.2755-1.2245-1.3776-1.4796-15-.2551-12.9082-.3061-13.7755-1.3266-15.1531-1.8367-2.5-4.1836-3.7245-6.9387-3.7245-3.3674,0-5.8164,1.2245-7.449,3.6735l-1.3265,2.0408.153,14.4898c.051,7.9592-.051,14.7449-.2041,15.051-.2551.3572-.9183.051-1.8367-.8673l-1.4796-1.4286v-29.8469-29.847l1.4286-1.1734c.7653-.6123,1.5306-1.1225,1.7857-1.1735.2041,0,.3571,6.2755.3571,13.9286Z"
                  fill="#fff"
                />
              </g>
              <g transform="translate(0 0.000001)">
                <path
                  d="M328.469,29.2857L325,32.1938v30.2041v30.2551l3.214,3.1633c1.735,1.7347,3.368,3.1632,3.521,3.1632.204,0,.459-7.704.51-17.1428l.153-17.1429l1.888-1.6836c2.398-2.2449,4.847-2.7041,7.347-1.4796c3.928,1.9898,3.979,2.1938,4.285,17.5l.255,13.6734l3.113,3.3674l3.112,3.4183.357-8.4183c.51-12.8572-.102-26.4796-1.326-29.3368-1.174-2.8061-3.572-5.3571-6.276-6.7347-2.806-1.4795-8.061-1.7857-10.663-.7142-1.072.4591-2.041.8163-2.143.8163s-.255-6.4796-.306-14.3878l-.153-14.3367-3.419,2.9082Zm2.449,28.8775c.153,0,.919-.4592,1.684-.9694c2.398-1.7347,5.867-2.3469,9.133-1.5816c2.347.5102,3.316,1.0714,5.459,3.2653c1.633,1.6327,2.806,3.3673,3.214,4.6939.408,1.4285.612,6.7857.612,16.8367v14.7449l-1.632-1.6837-1.684-1.6326-.255-13.7245c-.255-12.8572-.306-13.8265-1.327-15.1531-4.03-5.4081-11.785-4.8979-14.846,1.0204-.715,1.3266-.817,3.6225-.715,16.2245.051,8.1123-.051,14.6939-.255,14.6939-.255,0-1.071-.6122-1.837-1.3775l-1.428-1.3776v-29.6939-29.6939l1.683-1.4285l1.633-1.3776.153,14.1327c.051,7.7551.255,14.0816.408,14.0816Z"
                  fill="#fff"
                />
              </g>
              <g transform="translate(.000001 0)">
                <path
                  d="M251.531,52.8572v2.8572l2.448-1.4286c1.327-.7653,3.011-1.7857,3.776-2.1939c2.551-1.4286,1.786-2.0918-2.398-2.0918h-3.826v2.8571Z"
                  fill="#fff"
                />
              </g>
              <g transform="translate(.000001 0)">
                <path
                  d="M361.735,52.8572v2.8572l1.683-1.0205c.868-.5102,2.602-1.5306,3.827-2.1428c3.316-1.8367,2.857-2.551-1.684-2.551h-3.826v2.8571Z"
                  fill="#fff"
                />
              </g>
              <g transform="translate(.000001 0)">
                <path
                  d="M219.898,65.1021c0,8.0613.153,14.5408.306,14.3368.153-.1531,2.551-4.1327,5.255-8.8776c5.459-9.4898,7.092-11.1735,10.204-10.6633.919.1531,2.245.6123,2.959,1.0715c1.633,1.0714,2.858,4.0816,2.449,5.8163-.204.7143-2.908,5.8163-6.122,11.2755l-5.765,10-.562,5.5102c-.306,3.0612-.51,5.6633-.408,5.7143.102.102,1.072-.7653,2.245-1.9898c1.939-2.0408,15.919-25.7653,16.735-28.3163c1.786-5.9694-2.143-13.4184-8.061-15.1531-4.133-1.2245-7.347-.8163-10.562,1.4286l-1.632,1.1224-2.653-2.4489c-4.745-4.4898-4.388-5.4592-4.388,11.1734Zm4.082-9.1836c.459.5102.714,1.9387.714,3.7244-.051,2.8062-.051,2.8062.765,1.5817c1.633-2.5,3.674-4.4898,5.357-5.3061c3.317-1.5817,9.031-.7654,11.735,1.6326c1.48,1.3265,3.367,5.7653,3.367,8.0102c0,1.1225-.51,3.1123-1.173,4.4388-1.531,3.2143-13.827,24.3367-14.133,24.3877-.153,0-.153-1.3265,0-2.9591.255-2.5511,1.021-4.1327,6.123-12.8572c4.541-7.8061,5.816-10.4592,5.969-12.2449.408-4.3877-3.01-8.1632-7.347-8.1632-4.235,0-5.663,1.3265-10.306,9.5408-1.48,2.602-2.857,4.8469-3.163,5-.255.204-.459-3.4184-.459-9.1837c0-9.0306.051-9.4388.918-8.9796.51.2551,1.275.8673,1.633,1.3776Z"
                  fill="#fff"
                />
              </g>
              <g transform="translate(.000001 0)">
                <path
                  d="M255,54.2346l-3.469,1.9898v19.0816v19.0816L255,96.6325l3.418,2.2449.153-11.6836c.051-6.4286.051-16.9388,0-23.3164l-.153-11.6326L255,54.2346Zm2.143,21.3265v20.4592l-1.633-1.0714-1.684-1.0204-.153-18.3674-.102-18.3163l1.633-1.0714c.918-.5613,1.735-1.0715,1.837-1.0715.051,0,.102,9.1837.102,20.4592Z"
                  fill="#fff"
                />
              </g>
              <g transform="translate(.000001 0)">
                <path
                  d="M365.204,54.2346l-3.469,1.9898v19.1837l.051,19.2347l3.418,2.1428l3.418,2.1429.153-11.7347c.051-6.4286.051-16.9388,0-23.3164l-.153-11.6326-3.418,1.9898Zm2.143,21.3265v20.4592l-1.633-1.0714-1.683-1.0204-.154-18.4184-.102-18.3673l1.633-1.0205c.918-.5612,1.735-1.0204,1.837-1.0204.051,0,.102,9.1837.102,20.4592Z"
                  fill="#fff"
                />
              </g>
              <g transform="translate(0 0.000001)">
                <path
                  d="M147.296,53.5715c-1.327,1.0204-5.663,8.1123-13.623,22.0408-4.438,7.8062-5,10.6123-3.061,15.1021c2.041,4.6939,5.919,7.2449,11.123,7.2449c4.438,0,7.653-1.7857,10.306-5.7143c1.122-1.6837,2.041-3.2653,2.041-3.5204c0-1.3266,1.173-.051,2.857,3.1122c2.143,4.1327,4.745,6.0715,8.622,6.5306c4.643.5102,9.745-3.3163,11.276-8.4694.918-3.0102.867-4.9489-.204-7.8061-1.684-4.5408-13.47-26.7347-15-28.2653l-1.531-1.5306.357,5.6122.357,5.6123l5.306,10.4082c3.47,6.8367,5.307,10.9693,5.307,12.0408c0,2.449-1.939,5-4.235,5.5612-2.959.7653-4.133-.4592-8.316-8.5714-1.99-3.8776-3.776-7.0408-4.031-7.0408s-2.245,3.0612-4.388,6.7857c-2.194,3.7755-4.49,7.2449-5.102,7.7041-.663.5612-1.939.9183-3.367.9183-1.939,0-2.551-.2551-4.031-1.7347-2.857-2.8571-2.551-4.2347,3.061-14.1326c4.745-8.3674,4.745-8.3674,4.49-11.2755-.204-2.6531,0-3.3674,1.684-6.7858c2.143-4.3367,2.143-5.4591.102-3.8265Zm21.53,16.6327c3.419,6.6326,6.429,13.0102,6.633,14.0816.612,2.602-.306,6.3776-2.143,8.7245-2.602,3.4184-7.806,4.5918-11.173,2.449-1.888-1.1225-2.347-1.7857-5.255-7.2959l-2.092-3.9796-1.99,3.4693c-3.061,5.3062-4.184,6.5307-6.888,7.7041-3.061,1.3266-5.714,1.3266-8.469.1021-4.235-1.9388-6.99-7.347-5.867-11.5817.306-1.1224,2.04-4.6428,3.928-7.8571c1.837-3.2143,4.337-7.551,5.459-9.5408c1.174-2.0408,2.296-3.7245,2.551-3.7245.204,0,.358.9694.358,2.1428c0,1.8368-.766,3.5205-4.541,10.0511-2.551,4.3367-4.745,8.7245-4.898,9.7449-.715,4.2857,3.163,8.6734,7.704,8.6734c3.01,0,5.153-1.8367,8.163-7.0408c1.582-2.7041,3.214-5.5102,3.674-6.1735.714-1.2244.765-1.1224,3.724,4.5919c3.469,6.8367,5.153,8.6224,8.163,8.6224c4.184,0,7.092-3.0102,7.092-7.3469c0-1.9898-.867-4.0816-5.357-13.0612-4.133-8.2653-5.357-11.1735-5.357-12.7551c0-1.1225.102-2.0408.204-2.0408s3.01,5.4081,6.377,12.0408Z"
                  fill="#fff"
                />
              </g>
              <g transform="translate(.000001 0)">
                <path
                  d="M293.367,53.0102l-5.357.3062-8.877,5.102c-10.256,5.9184-13.215,8.3163-14.847,12.0918-.919,2.1939-1.123,3.3164-.919,6.3266.306,4.2857,1.786,7.3469,4.847,9.8469l1.939,1.5816.867-2.653c.459-1.5306,1.429-3.1633,2.143-3.7245c1.684-1.3265,27.194-15.8673,29.031-16.5816c1.888-.6633,4.847.102,6.632,1.7347c2.705,2.551,2.705,7.551,0,10.051-.816.7143-5.816,3.7755-11.122,6.7857-5.357,3.0612-9.796,5.6122-9.898,5.7143-.255.2551-1.02,8.0612-.816,8.3163.102.102,5.765-3.0102,12.602-6.8877c8.01-4.5919,13.214-7.9082,14.694-9.3878c5.663-5.5612,5.408-14.7449-.511-20.051-2.551-2.347-4.489-3.2143-7.959-3.6735-4.439-.6122-4.949-.4082-24.796,11.1225-9.898,5.7653-10.102,5.8673-10.102,4.7449c0-1.8878,3.878-4.6939,16.837-12.0919c7.449-4.2857,13.98-8.0612,14.541-8.4694c1.122-.7653,1.377-.7653-8.929-.2041Zm1.531,2.296c-.408.4081-5.459,3.3673-11.225,6.6836-5.765,3.2653-11.224,6.6837-12.142,7.5511-1.837,1.7857-2.807,4.3877-2.552,6.7857l.154,1.5816l14.54-8.3673c8.011-4.6429,15.306-8.7755,16.276-9.1837c2.296-.9694,6.582-.9184,9.03.102c8.113,3.3674,10.256,14.3368,3.929,20.2551-1.326,1.2245-3.877,2.8062-18.724,11.3266-2.756,1.5816-5.102,2.8061-5.205,2.704-.153-.102-.051-1.0714.205-2.1938.408-1.8878.612-2.0919,10.306-7.6531c10.969-6.3265,12.704-7.8571,13.112-11.5816.357-3.1123-.561-5.5613-2.908-7.7041-2.245-2.0408-4.949-2.7551-7.653-1.9898-1.633.4082-8.164,4.0306-25.459,14.1326-4.745,2.8062-6.633,4.4898-7.347,6.6837-.307.7653-1.837-.7143-2.909-2.8061-2.398-4.6429-1.53-10.7143,1.99-14.1837c2.296-2.2449,19.592-12.1939,21.735-12.5.867-.102,2.449-.2551,3.571-.3061c1.735-.051,1.888.051,1.276.6633Z"
                  fill="#fff"
                />
              </g>
              <g>
                <path
                  d="M113.01,58.3673c-5.867,3.3673-9.388,5.7142-9.796,6.4795-1.071,2.1939-3.2141,8.1633-2.806,7.9592c6.939-4.0816,16.071-9.0306,16.276-8.8775.102.153-4.337,2.8571-9.898,6.0204-5.511,3.2143-10.9188,6.6837-11.9902,7.7041-5.2041,5.204-4.0306,14.7959,2.347,18.5204c4.7962,2.8061,9.0302,2.5,15.1532-1.0204c4.286-2.449,4.541-2.5511,4.541-1.7857c0,.5102,2.04,2.5,4.847,4.6938l1.275.9694v-22.9592c0-12.653-.153-23.0102-.357-23.0102-.255,0-4.541,2.398-9.592,5.3062Zm7.908,17.2449v19.4387l-1.224-1.1224c-.715-.6633-1.327-1.8368-1.429-2.6021l-.153-1.4285-5.612,3.1122c-5.102,2.9082-5.816,3.1633-8.674,3.1633-3.8261,0-6.5812-1.3266-8.622-4.2347-3.0612-4.2857-2.0919-11.0204,1.9388-14.1327c1.6836-1.2755,16.6832-9.949,17.1942-9.949.204,0,.204.7143,0,1.6327-.306,1.4796-1.123,2.0918-7.96,6.0204-9.0302,5.2551-10.1526,6.4286-9.8465,10.6123.2551,3.1122,1.4796,5.051,4.0305,6.3775c2.959,1.5816,5.561.9694,12.041-2.7551l5.765-3.2653v-12.9082c0-7.0408-.051-12.8571-.153-12.8571s-3.367,1.8367-7.245,4.0816c-3.877,2.2449-7.194,3.9796-7.296,3.8266-.102-.1021.204-1.0205.715-2.0409.816-1.5306,2.296-2.602,8.367-6.1224c4.082-2.3469,7.551-4.2857,7.806-4.3367.204,0,.357,8.7755.357,19.4898Zm-4.285,9.3367c-.102.3571-2.602,1.9388-5.511,3.6224-3.673,2.0919-5.816,2.9592-7.091,2.9592-3.929.051-6.7352-3.7245-5.5617-7.5.6633-2.2449,1.5817-2.9592,10.6127-8.1122c3.469-1.9898,6.377-3.8776,6.53-4.2857.765-2.6021.97-1.6327,1.123,5.153.051,4.1837.051,7.8572-.102,8.1633Z"
                  fill="#fff"
                />
              </g>
              <g transform="translate(.000001 0)">
                <path
                  d="M203.47,58.5713l-9.541,5.4592-1.582,4.2857c-.867,2.347-1.48,4.3878-1.326,4.4898.153.1531,11.887-6.3775,15-8.4183.612-.4082,1.122-.5102,1.122-.3062c0,.2551-4.439,2.9592-9.847,6.0715-10.51,5.9694-13.52,8.4183-14.541,11.8367-2.194,7.2959,1.582,14.2857,8.623,15.9694c3.622.8673,6.275.3061,10.867-2.2959c2.194-1.2755,4.082-2.296,4.235-2.296s1.683,1.2756,3.367,2.8062l3.163,2.8061.153-11.4796c.051-6.3265.051-16.6327,0-22.9082l-.153-11.4285-9.54,5.4081Zm8.265,16.9388c0,10.6633-.153,19.3878-.357,19.3878-.97,0-2.194-1.8878-2.194-3.4184c0-.9184-.102-1.6837-.255-1.6837-.102,0-1.735.9184-3.521,2.0408-6.785,4.1327-8.367,4.6939-11.887,4.4898-5.256-.3571-8.98-3.7755-9.694-9.0306-.357-2.602,1.02-6.6326,2.806-8.3673c1.479-1.4286,18.01-11.1735,18.367-10.8674.102.1531.051.9184-.153,1.7347-.255,1.3266-1.224,2.0919-7.296,5.5102-3.826,2.1939-7.704,4.6939-8.571,5.5612-2.194,2.1429-2.653,5.0511-1.276,8.1123c1.276,2.9592,3.521,4.3877,6.939,4.3877c2.245,0,3.316-.4591,8.52-3.4693l5.97-3.4184.051-12.9082v-12.9081l-1.48.7653c-.816.4592-4.03,2.2959-7.194,4.1326-3.163,1.8368-5.816,3.2653-5.969,3.1633-.408-.4082.459-2.8572,1.224-3.5204.97-.8163,15.051-8.9796,15.613-9.0306.204-.051.357,8.6734.357,19.3367Zm-4.592,2.0408v8.1123l-5.459,3.1122c-4.949,2.8061-5.714,3.1123-7.806,2.9082-3.164-.3572-5.102-2.5-5.102-5.7143c0-3.1633,1.122-4.2347,9.694-9.1327c6.377-3.6734,7.448-4.4898,7.857-5.8673.255-.8674.51-1.5816.612-1.5816s.204,3.6734.204,8.1632Z"
                  fill="#fff"
                />
              </g>
              <g transform="translate(0-10)">
                <path
                  d="M388.418,54.4185c-.816.3061,5,6.8877,7.449,8.4183.919.5613,2.143,1.7857,2.654,2.6531c1.071,1.7857,1.275,5.3571.408,7.0918-.664,1.2755-14.286,15.1531-14.847,15.1531-.255,0-.408-7.0408-.408-15.6633v-15.6632l-3.827,3.7755-3.826,3.7755v14.8469c0,8.1123.204,15.051.408,15.4082.408.6632,6.275,5.2551,6.734,5.2551.153,0,5.153-4.898,11.072-10.8674c12.296-12.2959,13.112-13.5204,13.112-19.4898.051-8.6224-6.684-15.153-15.459-15-1.582,0-3.163.1531-3.47.3062Zm9.337,2.4489c2.602,1.0715,5.612,4.1327,6.837,6.9898c1.531,3.5715,1.275,8.5204-.663,11.7347-.715,1.2245-5.766,6.5817-11.174,11.9898l-9.847,9.7959-2.398-1.8877-2.449-1.8367v-14.5919-14.5918l2.041-1.9898l2.041-1.9898v16.0204v16.0714l8.724-8.6734c4.796-4.796,9.082-9.3878,9.49-10.2041.459-.8674.868-2.8061.868-4.3368.051-3.4693-1.327-5.9693-4.541-8.1632-1.225-.8163-2.959-2.449-3.878-3.6225l-1.683-2.1428l2.551.4081c1.377.2041,3.214.6633,4.081,1.0204Z"
                  transform="translate(0 10)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
          <g id="eQShFem6bWR29_to" transform="translate(113.754921,49.744851)">
            <rect
              width="229.863479"
              height="99.489702"
              rx="0"
              ry="0"
              transform="translate(-114.931739,-49.744851)"
              className="back-holder"
              strokeWidth="0"
            />
          </g>
          <g id="eQShFem6bWR30_to" transform="translate(203.999997,49.999996)">
            <path
              d="M10.4221,3.68687l-.0022.00139-4.07587,2.5717-.79482,9.14064-.00029.003c-.52023,5.5839-1.48855,16.6863-2.55234,28.8832-.50073,5.7412-1.02261,11.7249-1.52887,17.4897-.25512,3.214-.613137,6.7979-.768595,7.8861l-.001159.0081-.001424.0081c-.076159.4316-.123539.7498-.142252.9844-.0069.0866-.009416.1562-.008776.2119.039166-.0074.084871-.0175.138389-.0308.000573-.0002.001667-.0006.003317-.0013.010034-.0039.040658-.0158.100288-.0428.07459-.0338.174288-.0818.299572-.1445.25006-.125.58927-.3022,1.00908-.5266.8389-.4484,1.98877-1.0798,3.36865-1.8478c2.75896-1.5356,6.4302-3.6134,10.3576-5.8576c6.9021-3.9986,10.5077-6.0778,12.7358-7.1532c1.1193-.5403,1.9167-.8403,2.6277-1.0012.7155-.162,1.3199-.1774,2.0284-.1774c2.5778,0,4.7494.786,6.3253,2.2728c1.5749,1.4859,2.5079,3.6274,2.6938,6.2513.1306,1.6487.0163,3.0245-.4097,4.2339-.4282,1.2155-1.1585,2.2266-2.2026,3.1639-.1122.1022-.332.2551-.6029.4342-.2873.1899-.6703.4335-1.1358.7235-.9316.5802-2.2037,1.3521-3.7224,2.2614-3.0381,1.819-7.0705,4.1925-11.357,6.693l-.0034.002c-1.3543.7755-2.5933,1.4818-3.7274,2.1283-2.5453,1.451-4.5623,2.6008-6.1682,3.5562-2.3284,1.3853-3.74786,2.3364-4.6408,3.1747-.86619.8131-1.22523,1.509-1.42451,2.4093-.14085.6364-.19968,1.3499-.27636,2.2799-.0395.479-.08374,1.0154-.14635,1.6283-.00005.0005-.0001.001-.00014.0014l-.22978,2.3745.52726-.1898c.10024-.0391.42268-.2017.98504-.5042.55213-.297,1.30263-.7107,2.22613-1.2264c1.84651-1.0311,4.37841-2.4667,7.38481-4.1852c6.0124-3.4365,13.9191-8.002,22.0303-12.7208c4.9012-2.8802,7.4707-5.3206,9.3-8.7816l.0022-.004c.4911-.9086.7607-1.5942.9154-2.5702.1588-1.0011.198-2.3146.198-4.488c0-2.278-.0396-3.5852-.2218-4.5991-.1775-.9885-.4934-1.712-1.0947-2.8145h-.0001l-.0038-.0072c-.7847-1.4959-2.0734-3.1118-3.5446-4.5203-1.4724-1.4098-3.0956-2.5813-4.5306-3.2136l-.0028-.0013c-1.4147-.6341-3.283-1.0586-5.192-1.2339-1.9055-.1749-3.8112-.0978-5.3009.2429-.6342.1663-2.165.8285-4.1521,1.8061-1.9737.971-4.3491,2.2285-6.6351,3.5493l-.0015.0009-8.3673,4.7959-.6614.3791-.0842-.7577-.15261-1.3735c-.01122-.0902-.01168-.2174-.00964-.3458.0023-.1445.00891-.3309.01933-.5549.02086-.4486.0576-1.0606.1083-1.8156.10142-1.5106.25952-3.6033.46042-6.1262.4019-5.0465.9761-11.8209,1.6139-19.1174v-.0002c.6377-7.2696,1.1988-13.901,1.5877-18.7273.1945-2.41337.3458-4.37413.4421-5.73725.0396-.56105.0698-1.01916.0898-1.36522-.1759.09308-.3825.20671-.616.33908-.8004.45377-1.8897,1.11226-3.0835,1.87426ZM8.7646,57.9534c-.0187.3382-.03044.6061-.03639.8158.0588-.0283.1218-.059.18893-.0921.51721-.255,1.25236-.6391,2.15256-1.1258c1.799-.9726,4.2428-2.3472,6.8917-3.9009l.0028-.0016c5.7271-3.309,9.1571-5.1517,11.8281-5.9942c2.7256-.8597,4.6617-.6783,7.3654-.0284l.004.0009c12.2506,3.0496,16.4914,18.0076,7.5231,26.6606-.1546.1503-.4335.3598-.7862.6064-.3637.2542-.8356.5682-1.3979.9316-1.125.7272-2.6233,1.6598-4.3648,2.7222-3.4835,2.1253-7.9492,4.7753-12.3675,7.3498-4.4182,2.5743-8.7919,5.0747-12.0911,6.9004-1.6489.9123-3.0335,1.6585-4.02247,2.1615-.49299.2507-.89589.4452-1.18704.57-.14309.0614-.27433.1125-.38213.1438-.0511.0149-.12049.0325-.19415.0383-.03653.0029-.09614.0049-.16524-.0088-.05523-.0109-.14997-.0385-.23955-.1138-.08057-.0655-.1262-.1404-.15011-.1862-.03037-.0582-.04895-.1149-.06095-.1592-.02401-.0886-.03703-.1858-.04494-.2769-.01614-.1861-.01699-.4232-.0071-.687.01994-.5315.08574-1.2251.18954-1.9518.00003-.0002.00006-.0005.00009-.0007l.35694-2.5496.03394-.2424.21225-.1219l13.06122-7.5.0005-.0003c9.1405-5.2341,14.0578-8.0807,16.8587-9.9501c1.3987-.9335,2.245-1.6075,2.8194-2.1977.5644-.5798.8782-1.0907,1.1946-1.7235l.0021-.0041c3.2107-6.2755-.5771-13.6647-7.5877-14.7369-.7595-.1102-1.4063-.1432-2.1642-.0209-.7662.1236-1.671.4101-2.9355.9718-2.54,1.1282-6.4289,3.3184-13.4027,7.3546l-.0028.0016c-3.4448,1.9648-6.63572,3.7645-9.0046,5.0734-1.18401.6543-2.16512,1.1873-2.87072,1.5573-.35214.1847-.63991.3311-.85166.4321-.10512.0502-.19769.0922-.27292.1226-.03718.015-.07704.0301-.11594.0422l-.00106.0003c-.02484.0077-.10183.0316-.19202.0316-.30876,0-.52497-.1817-.64685-.3814-.10995-.1802-.16367-.3999-.19285-.6115-.05956-.4318-.04125-1.0293.03642-1.7542h-.00013l.00149-.0114c.15112-1.1586.86421-9.1016,1.57916-17.6809.71399-8.568,1.47983-17.6564,1.73547-20.1623l.00106-.0089c.29603-2.4669.737-7.8228,1.08985-12.1083l.03072-.3731c.1788-2.1712.3705-4.229.53686-5.78386.08313-.77689.16028-1.43154.22666-1.91319.0331-.24022.06419-.44225.09269-.59685.01418-.07697.02868-.1474.04358-.20744.01199-.04831.03323-.12877.06968-.20166l-.00007-.00003.00399-.00764c.20782-.39833.6704-.82858,1.16125-1.21247.5123-.40068,1.13066-.80751,1.73094-1.15192.5966-.34233,1.1972-.63556,1.6732-.79774.2303-.07847.4743-.14154.6897-.14299.1073-.00072.2545.01296.3968.08779.1613.08486.2846.23316.329.42518.0217.09017.0241.19261.0253.24693v.0008c.002.08437.0012.19107-.0018.3157-.0058.25032-.0207.59265-.0435,1.01384-.0457.84346-.1241,2.0175-.2294,3.43475-.2107,2.835-.5299,6.6515-.9127,10.7609C10.498,36.8054,9.64364,46.6117,9.18464,52.26c-.22959,2.8252-.35984,4.6052-.42004,5.6934Z"
              transform="translate(-25.150304,-49.577011)"
              fill="#e51c4c"
              stroke="#e51c4c"
            />
          </g>
        </g>
        <clipPath id="eQShFem6bWR31">
          <rect width="407.653" height="100" rx="0" ry="0" fill="#fff" />
        </clipPath>
      </g>
    </svg>
  );

  useEffect(() => {
    if (done) {
      onDone();
      setDone(false);
    }
  }, [done]);

  useEffect(() => {
    let timeOut;
    if (trigger) {
      timeOut = setTimeout(() => {
        setDone(true);
      }, duration);
    }

    return () => clearTimeout(timeOut);
  }, [trigger]);

  return renderAnimatedLogo();
};

AnimatedLogo.propTypes = {};

AnimatedLogo.defaultProps = {};

export default AnimatedLogo;