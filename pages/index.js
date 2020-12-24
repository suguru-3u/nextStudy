import Link from 'next/link';
import style from '../static/Style';
import Counter from '../components/Counter';

export default () =><div>
   {style}
    <h1>Next.js</h1>
    <p>Wellcome</p>
    <Link href="/other">
        <a>Go to other page</a>
    </Link>
    <hr />
    <Counter />
</div>

