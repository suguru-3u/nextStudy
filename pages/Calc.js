import Link from 'next/link';
import Layout from '../components/Layout';
import Calc from '../components/Calc';

export default () => (
    <Layout header="Next" title="Top page">
        <Calc/>
        <hr/>
        <Link href='./other'>
            <button>go to other</button>
        </Link>
    </Layout >
);