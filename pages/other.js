import Link from 'next/link';

export default () =><div>
    <style jsx>{`
        h1{
            font-size:72pt;
            font-weight:bold;
            text-align:right;
            leter-spacing:-8px;
            color:f0f0f0;
            margin:-30px 0px;
        }
        p{
             font-size:16p
             t;
             color:#666;
             margin:0px;
        }
    `}</style>
    <h1>Next.js</h1>
    <p>Wellcome</p>
    <Link href="/">
        <a>Go to index page</a>
    </Link>
</div>

