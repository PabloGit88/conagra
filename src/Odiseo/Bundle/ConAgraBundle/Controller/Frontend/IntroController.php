<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Sylius\Bundle\ResourceBundle\Model\RepositoryInterface;

class IntroController extends Controller
{
	public function indexAction()
    {
        return $this->render('OdiseoConAgraBundle:Frontend/Intro:index.html.twig');
    }
    
    public function registerAction()
    {
    	return $this->render('OdiseoConAgraBundle:Frontend/Intro:register.html.twig');
    }
    
    public function loginAction()
    {
    	
    	return $this->render('OdiseoConAgraBundle:Frontend/Intro:login.html.twig');
    }
    
    
    public function retriveDistributorsForCountryAction(Request $request)
    {
    	$country = $request->get('country');
    	
    	/* @var $distributorRepository RepositoryInterface */
    	$distributorRepository = $this->get('odiseo_conagra.repository.distributor');    	
    	$distributors = $distributorRepository->findBy(array('country' => $country));
    	
    	$d = array();
    	foreach ($distributors as $distributor)
    	{
    		$d[$distributor->getId()] = $distributor->getName();
    	}
    	
    	return new JsonResponse(array('distributors' => $d));
    }
    
}
