import Link from 'next/link';
import Layout from '../components/Layout';

export default () =><div>
   <Layout header="Next" title="Top page">
    <p>Wellcome</p>
    <Link href="/">
        <button>
        <a>Go to other page</a>
        </button>
    </Link>
    <hr />
    </Layout >
</div>

