import AntMan from '../../assets/Imgs/AntMan.jpg';
import dearJohn from '../../assets/Imgs/dearJohn.jpg';
import GalaxyGuardianIII from '../../assets/Imgs/Galaxy.jpg';
import IronMan from '../../assets/Imgs/IronMan.jpg';
import Jaws from '../../assets/Imgs/Jaws.jpg';
import Joker from '../../assets/Imgs/Joker.jpg';

export interface Movie {
    src: string;
    title: string;
    main: string;
    runtime: string;
}

export const moviesData: Movie[] = [
    {
        src: AntMan,
        title: 'Antman',
        main: 'Hank Pym',
        runtime: '120m',
    },
    {
        src: dearJohn,
        title: 'dearJohn',
        main: 'John Tyree',
        runtime: '108m',
    },
    {
        src: GalaxyGuardianIII,
        title: 'GalaxyGuardianIII',
        main: 'Christ Path',
        runtime: '149m',
    },
    {
        src: IronMan,
        title: 'IronMan',
        main: 'Robert Downey Jr.',
        runtime: '120m',
    },
    {
        src: Jaws,
        title: 'Jaws',
        main: 'Roy Scheider',
        runtime: '120m',
    },
    {
        src: Joker,
        title: 'Joker',
        main: 'Jared Leto',
        runtime: '120m',
    },
];
