import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import certificationsData from '@/data/certificationsData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 sm:py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Professional certifications I've earned
          </p>
        </div>

        {/* Certifications Grid - Fixed for centering */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-4xl">
            {certificationsData.map((cert, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-4 sm:p-6">
                  {/* Certification Title */}
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-full mr-3">
                      <Award className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{cert.title}</h3>
                  </div>

                  {/* Certification Details */}
                  <div className="mb-4 space-y-2">
                    <div className="flex items-start">
                      <span className="font-medium mr-2">Issuer:</span>
                      <span>{cert.issuer}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1.5 text-muted-foreground" />
                      <span className="text-xs sm:text-sm text-muted-foreground">{cert.date}</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mt-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* View Certificate Button */}
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <span className="mr-1">View Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;