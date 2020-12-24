import Link from 'next/link';
import style from '../static/Style';

export default () =><div>
   {style}
    <h1>Next.js</h1>
    <p>Wellcome</p>
    <Link href="/other">
        <a>Go to other page</a>
    </Link>
</div>

