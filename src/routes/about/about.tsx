import { Typography } from '@mui/material';
import styles from './about.module.scss';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <div className={styles['container']}>
      <Typography variant="h4">About us</Typography>

      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus,
        augue at condimentum tempus, est ipsum venenatis lorem, eget pretium
        mauris turpis vitae est. Aliquam vitae nisi id justo molestie cursus a
        placerat leo. Phasellus ut pretium nunc. Maecenas pulvinar enim ut
        mauris fringilla, id consequat ex convallis. Quisque elementum viverra
        mi eu semper. Praesent non consequat purus. Sed ut facilisis lectus.
        Curabitur lacinia mi sit amet elit molestie tempus id sit amet risus.
      </Typography>

      <Typography paragraph>
        Aenean venenatis imperdiet luctus. Duis sit amet lacus tempor,
        condimentum justo sit amet, rhoncus ipsum. Integer malesuada massa vel
        ipsum auctor, ac vulputate lacus ullamcorper. Nunc ut felis vulputate,
        ultrices ipsum ac, imperdiet sapien. Pellentesque a malesuada purus, ut
        euismod odio. Ut fermentum maximus lacus, in sagittis turpis porta et.
        Morbi vel tortor vitae tortor euismod fringilla et sed ex. Pellentesque
        arcu quam, sagittis vitae luctus non, lacinia ac nisi.
      </Typography>

      <Typography paragraph>
        Maecenas sollicitudin vitae augue non tincidunt. Maecenas eget purus
        dapibus, dignissim ex in, vestibulum mi. Suspendisse porta quam tellus,
        eget varius elit blandit id. Duis elementum finibus quam, quis aliquam
        enim vehicula sed. Praesent consequat sem vitae arcu maximus, eget
        facilisis dolor lacinia. Maecenas vitae leo eget justo elementum
        tincidunt. In auctor tincidunt purus non lobortis. Nullam semper justo
        nisl, at congue nisi porttitor et. Ut luctus pellentesque velit, et
        efficitur ligula facilisis nec. Aenean tempor libero nibh, eu tempor
        lorem luctus venenatis. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos.
      </Typography>

      <Typography paragraph>
        Quisque molestie rutrum tellus, non tempor dolor euismod pharetra.
        Aliquam iaculis orci a mi blandit gravida. Sed interdum ipsum nisi,
        vitae pharetra metus pharetra sit amet. Mauris ultrices feugiat nulla in
        porta. Vivamus blandit scelerisque arcu at laoreet. Curabitur eget
        mollis nisl. Nam imperdiet non eros a pretium. Maecenas eget justo vel
        est aliquet suscipit. Praesent mollis urna euismod maximus laoreet.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam a
        erat a nunc molestie fermentum. Pellentesque tristique magna et varius
        ornare. Cras tristique, magna vel elementum semper, leo augue convallis
        eros, ac lobortis mi nibh a libero.
      </Typography>

      <Typography paragraph>
        Vestibulum vitae feugiat felis. Nunc tempor molestie lacus, et efficitur
        sem blandit laoreet. Nam a ligula turpis. Fusce quis quam sed lorem
        tempus venenatis. Etiam neque magna, vulputate sed iaculis sit amet,
        ultrices a sem. Ut convallis dolor hendrerit libero vehicula lobortis.
        Suspendisse potenti. Fusce vel velit aliquet, ultricies ex eu,
        pellentesque dui. Maecenas sapien felis, interdum sed dui eget,
        dignissim egestas orci.
      </Typography>
    </div>
  );
}

export default About;
