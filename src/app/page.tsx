import Image from "next/image";


export default function Home() {
  return (
    
    <div className="container mx-auto p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-2">Your Love</h1>
        <h4 className="text-xl text-gray-400 mb-4">Song by The Outfield</h4>

        <a
          href="https://www.youtube.com/watch?v=4N1iwQxiHrs"
          target="_blank"
          rel="noopener noreferrer"
          title="goes to music"
          className="text-blue-400 hover:underline"
        >
          Original Video
        </a>

        <br />
        <br />

        <a
          href="https://www.youtube.com/watch?v=4N1iwQxiHrs"
          target="_blank"
          rel="noopener noreferrer"
          className="block my-4"
        >
          {/* Caminho relativo à pasta 'public' */}
          <Image
            src="/imagem/album_art.jpeg"
            alt="album art"
            width={200}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </a>

        <br />

        <audio controls className="w-full md:w-auto">
          {/* Caminho relativo à pasta 'public' */}
          <source src="/audio/the_outfield_your_love_mp3_3044.mp3" type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>

        <hr className="my-8 border-gray-700" />

        <br />

        <pre className="text-gray-300 whitespace-pre-wrap leading-relaxed font-sans text-lg">
          {`Josie's on a vacation far away
Come around and talk it over
So many things that I wanna say
You know I like my girls a little bit older

I just wanna use your love tonight
I don't wanna lose your love tonight

I ain't got many friends left to talk to
Nowhere to run when I'm in trouble
You know I'd do anything for you
Stay the night but keep it undercover

I just wanna use your love tonight, oh
I don't wanna lose your love tonight

Try to stop my hands from shaking
But something in my mind's not making sense
It's been a while since we've been all alone
I can't hide the way I'm feeling

As you're leaving, please, would you close the door?
And don't forget what I told you
Just 'cause you're right, that don't mean I'm wrong
Another shoulder to cry upon

I just wanna use your love tonight, yeah
I don't wanna lose your love tonight, yeah

I just wanna use your love tonight
I don't wanna lose your love tonight

I just wanna use your love tonight
I don't wanna lose your love tonight

(Use your love, lose your love)
Your love (use your love)
Well, I don't wanna lose (lose your—, tonight)
I don't wanna, I don't wanna, I don't wanna lose (use your—, tonight)
Your love (lose your—, tonight)
Your love, your love (use your—, tonight)
Your love (I don't wanna lose your love tonight)
(Use your—, tonight)`}
        </pre>
      </div>
    </div>
  );
}