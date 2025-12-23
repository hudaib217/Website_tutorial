import React from 'react';
import { FaRocket, FaEye, FaHeart, FaUsers, FaCode, FaPalette } from 'react-icons/fa';
import SEO from '../components/common/SEO';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Container from '../components/common/Container';

const About = () => {
  const values = [
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies.',
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver.',
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision becomes reality.',
    },
    {
      icon: FaCode,
      title: 'Excellence',
      description: 'We strive for perfection in every line of code and every pixel.',
    },
  ];

  const skills = [
    { name: 'Frontend Development', icon: FaCode, level: 95 },
    { name: 'Backend Development', icon: FaCode, level: 90 },
    { name: 'Mobile Development', icon: FaCode, level: 85 },
    { name: 'UI/UX Design', icon: FaPalette, level: 92 },
    { name: 'Digital Marketing', icon: FaRocket, level: 88 },
    { name: 'DevOps & Cloud', icon: FaCode, level: 87 },
  ];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about our mission, vision, and the talented team behind Digital Agency. We're passionate about creating exceptional digital experiences."
        keywords="about digital agency, our team, our mission, our values"
      />

      {/* Hero Section */}
      <Section bg="gradient" padding="large" className="pt-32">
        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Our Agency
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              We're a team of passionate creators, innovators, and problem-solvers dedicated to transforming businesses through exceptional digital solutions.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section bg="white" padding="large">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <FaRocket className="text-5xl text-primary-600 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To empower businesses of all sizes with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We believe in the transformative power of technology and strive to make it accessible and impactful for our clients.
              </p>
            </Card>

            <Card>
              <FaEye className="text-5xl text-accent-600 mb-4" />
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the leading digital agency recognized for excellence, innovation, and client success. We envision a future where every business, regardless of size, has access to world-class digital solutions that help them thrive in the digital age.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section bg="gray" padding="large">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Skills/Expertise */}
      <Section bg="white" padding="large">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                With years of experience and a diverse skill set, we deliver comprehensive digital solutions that exceed expectations.
              </p>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <skill.icon className="text-primary-600 mr-2" />
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary-600 to-accent-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-lg font-semibold">Team Photo</p>
                  <p className="text-sm">Replace with actual image</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section bg="gradient" padding="large">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-xl">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-xl">Team Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-xl">Years Experience</div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default About;
