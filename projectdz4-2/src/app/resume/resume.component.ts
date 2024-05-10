import {Component, OnInit} from '@angular/core';

class Resume {
  constructor(
    public fullName: string,
    public email: string,
    public phone: string,
    public city: string,
    public experience: string,
    public skills: string[],
    public certifications: string[],
    public photoUrl: string,
    public links: { github: string; linkedin: string; twitter: string }
  ) {
  }
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})

export class ResumeComponent implements OnInit {
  resume: Resume[];

  constructor() {
    this.resume = [];
  }

  ngOnInit(): void {
    const productData = [
      {
        fullName: 'Иван Иванов',
        email: 'ivan.ivanov@example.com',
        phone: '+380 99 123 4567',
        city: 'Киев',
        experience: 'Опыт работы в IT сфере более 5 лет. Работал на позициях Frontend Developer, Backend Developer.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Angular', 'Node.js'],
        certifications: ['Certified Angular Developer', 'Certified Scrum Master'],
        photoUrl: '../../assets/images/Portfolio_Photo.png',
        links: {
          github: 'https://github.com/yourusername',
          linkedin: 'https://www.linkedin.com/in/yourusername',
          twitter: 'https://twitter.com/yourusername'
        }
      }
    ];

    for (const data of productData) {
      this.resume.push(
        new Resume(
          data.fullName, data.email, data.phone,
          data.city, data.experience, data.skills,
          data.certifications, data.photoUrl, data.links
        )
      );
    }

  }


}
