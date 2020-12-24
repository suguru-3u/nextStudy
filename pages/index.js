import Link from 'next/link';
import Layout from '../components/Layout';

export default () =><div>
   <Layout header="Other" title="Other page">
    <p>This is other page</p>
    <Link href="/other">
        <button>
        <a>Go to other page</a>
        </button>
    </Link>
    <hr />
    </Layout >
</div>

