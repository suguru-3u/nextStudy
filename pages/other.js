import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';

export default () =>(
   <Layout header="Next" title="Other page">
        <Counter/>
        <hr/>
        <Link href='/'>
            <button>go to Top</button>
        </Link>
    </Layout >
);

