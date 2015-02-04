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
    		
    		if(rand(0, 5) == 1)
    		{
    			$countries = array('Colombia', 'Venezuela', 'Ecuador');
    			$question->setCountry($countries[array_rand($countries, 1)]);		
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
    	return 2;
    }
}
