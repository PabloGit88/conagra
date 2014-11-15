<?php

namespace Odiseo\Bundle\ConAgraBundle\Controller\Frontend;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class HomeController extends Controller
{
    public function showHomeAction( )
    {
        return $this->render('OdiseoConAgraBundle:Frontend:home.html.twig');
    }
}
