import { Injectable } from '@angular/core';

export type Email = {
  id: string,
  from: string,
  subject: string,
  body: string,
};

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emails: Email[] = [
    {
      id: 'f448d392-6767-41d9-8252-b72271e75321',
      subject: 'Digitized 24/7 analyzer',
      from: 'jerold_rogahn@jenkins.info',
      body: 'Similique repudiandae est. Magnam adipisci in. Dolores labore asperiores.\n\nVoluptatem sunt id. Sunt maxime delectus. Ab corrupti doloribus.\n\nModi vitae repellendus. Quia animi nam. Recusandae distinctio eveniet.'
    },
    {
      id: '7500eaa8-74f8-4435-9905-3a2a56e93dc9',
      subject: 'Monitored global flexibility',
      from: 'jerrod_ankunding@walker.info',
      body: 'Rerum quo officia. Pariatur non aut. Rerum modi dolorem.\n\nQuibusdam est velit. Aut numquam quasi. Vero consequatur dolore.\n\nRerum sint consequatur. Ab aut atque. Accusamus dolores aut.'
    },
    {
      id: '8ddf6982-988c-437a-b440-254dd5e622c8',
      subject: 'Switchable value-added leverage',
      from: 'solomon_bins@howe.biz',
      body: 'Natus aut aut. Quas tempora sit. Quaerat et est.\n\nVeritatis similique amet. Consequatur officiis temporibus. Enim ut voluptatem.\n\nIpsa eius qui. Vero eos provident. Accusamus fugit voluptatem.'
    },
    {
      id: '764a69f1-4eb0-4f53-b1fb-0b359c4db2ce',
      subject: 'Total asynchronous interface',
      from: 'yajaira@spencer.name',
      body: 'Ut iste perferendis. Quo non et. Est sunt consequuntur.\n\nConsequatur corrupti sunt. Alias hic est. Mollitia voluptas voluptatum.\n\nEt eligendi similique. Tenetur qui nihil. Sapiente suscipit iusto.'
    },
    {
      id: 'ecd91fc7-b3cf-4f50-8513-3a4b2ade23a9',
      subject: 'Horizontal coherent firmware',
      from: 'octavio_walker@dickinson-smith.com',
      body: 'Qui similique id. Excepturi quo voluptas. Deleniti esse rerum.\n\nNihil corrupti eius. Aut quia quisquam. Rem quidem atque.\n\nAd impedit nam. Quae aut id. Quis optio sed.'
    },
    {
      id: 'ab4e68c8-2cb5-4180-bdf6-c7c3615979cf',
      subject: 'Down-sized grid-enabled product',
      from: 'milan@dubuque-christiansen.com',
      body: 'Recusandae quod dolorem. Repellendus vel quasi. Enim sint cumque.\n\nEos voluptatibus excepturi. Ipsam libero qui. Ducimus et omnis.\n\nTotam ut recusandae. Voluptas dolor adipisci. Rerum itaque qui.'
    },
    {
      id: '9934a1f7-6a0e-436f-9e35-f1ef3802cd99',
      subject: 'Distributed static process improvement',
      from: 'shelly@torphy.org',
      body: 'Consequatur est et. Ea et ut. Ducimus soluta ullam.\n\nVoluptatibus nisi animi. Saepe ipsum et. Et velit exercitationem.\n\nQui voluptatum tempora. Id ut maxime. Quia rerum suscipit.'
    },
    {
      id: 'e7ff65ee-d3a1-453a-b892-6e1f5930a436',
      subject: 'Open-architected contextually-based application',
      from: 'tammie@wilkinson-kihn.name',
      body: 'Modi autem delectus. Perspiciatis alias magnam. Vel odio recusandae.\n\nExercitationem eum suscipit. Inventore culpa voluptatibus. Cumque velit eos.\n\nMolestiae voluptatem sit. Saepe qui aliquid. Est id libero.'
    },
    {
      id: '8ef4b2d6-b8e2-4a2b-b2cc-058e09c611aa',
      subject: 'Configurable 4th generation benchmark',
      from: 'latrina.hyatt@feest-murazik.io',
      body: 'Commodi numquam qui. Vitae unde necessitatibus. Numquam minima illo.\n\nRepudiandae explicabo doloribus. Nulla consequatur sunt. Cupiditate nulla qui.\n\nEt aut nihil. Fugit possimus aut. Et placeat quos.'
    },
    {
      id: '937cb739-4ad9-461e-9266-8d48b6b5eea6',
      subject: 'Open-source client-driven utilisation',
      from: 'oretha.johnson@gerhold.co',
      body: 'Debitis provident molestiae. Qui occaecati sunt. Odit id at.\n\nAtque est est. Aspernatur non minima. Animi qui voluptates.\n\nIure voluptates dolorem. Vel vero sed. Voluptas nemo molestiae.'
    }
  ];

  constructor() { }

  public getEmails(): Email[] {
    return this.emails;
  }

  public getEmailById(id: string): Email | undefined {
    return this.emails.find(email => email.id === id);
  }

}
