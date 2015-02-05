<?php

namespace Odiseo\Bundle\ChallengeBundle\DataFixtures\ORM;

use Doctrine\Common\Persistence\ObjectManager;
use Odiseo\Bundle\ConAgraBundle\Entity\TriviaQuestion;
use Odiseo\Bundle\ConAgraBundle\Entity\TriviaAnswer;

class LoadTriviaData extends DataFixture
{
    public function load(ObjectManager $manager)
    {
    	for($i=0; $i<10; $i++)
    	{
    		$question = new TriviaQuestion();
    		$question->setTitle($this->faker->text());
    		
    		if(($countryIndex = rand(0, 10)) < 5)
    		{
    			$country = $this->getReference('conagra_country_'.$countryIndex);
    			$question->setCountry($country);		
    		}
    		
    		for ($j=0; $j<3; $j++)
    		{
    			$answer = new TriviaAnswer();
    			$answer->setTitle($this->faker->sentence());
    			$answer->setQuestion($question);
    			
    			$manager->persist($answer);
    		}
    		
    		$manager->persist($question);	    		
    	}	
    	     	
    	$manager->flush();
    }
    
    public function getOrder()
    {
    	return 10;
    }
}
