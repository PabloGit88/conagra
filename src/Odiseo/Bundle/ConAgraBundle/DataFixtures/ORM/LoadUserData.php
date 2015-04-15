<?php

namespace Odiseo\Bundle\ConAgraBundle\DataFixtures\ORM;

use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\Finder\Finder;
use Odiseo\Bundle\ProjectBundle\DataFixtures\ORM\DataFixture;
use Odiseo\Bundle\ConAgraBundle\Entity\User;

class LoadUserData extends DataFixture
{
    public function load(ObjectManager $manager)
    {    	
    	for ($i=1; $i<=10; $i++)
    	{
    		$user = new User();
    		$user->setFullName('User '.$i);
    		$user->setUsername('user'.$i);
    		$user->setEmail('user'.$i.'@conagra.com');
    		$user->setPlainPassword('123456');
    		$user->setEnabled(true);
    		
    		$country = $this->getRandomCountry();
    		$distributor = $this->getRandomDistributor();
    		
    		$user->setCountry($country);
    		$user->setDistributor($distributor);
    		
    		$manager->persist($user);
    	}
    	
    	$manager->flush();
    }
    
    protected function getRandomCountry()
    {
    	return $this->getReference('conagra_country_0');
    }
    
    protected function getRandomDistributor()
    {
    	return $this->getReference('conagra_country_0_distributor_0');
    }
    
    public function getOrder()
    {
    	return 2;
    }
}
