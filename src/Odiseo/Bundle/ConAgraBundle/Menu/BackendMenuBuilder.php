<?php

namespace Odiseo\Bundle\ConAgraBundle\Menu;

use Knp\Menu\FactoryInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\SecurityContextInterface;

class BackendMenuBuilder
{
    private $factory;
    protected $securityContext;
    
    /**
     * @param FactoryInterface $factory
     */
    public function __construct(FactoryInterface $factory, SecurityContextInterface $securityContext)
    {
        $this->factory = $factory;
        $this->securityContext = $securityContext;
    }

    public function createMainMenu(Request $request)
    {
        $menu = $this->factory->createItem('root', array(
            'childrenAttributes' => array(
                'class' => 'sidebar-menu'
            )
        ));

        $menu->addChild('dashboard', array(
        		'route' => 'odiseo_conagra_backend_dashboard',
        		'labelAttributes' => array('icon' => 'fa-dashboard'),
        ))->setLabel("Dashboard");
        
        $menu->addChild('country', array(
        		'route' => 'odiseo_conagra_backend_country_index',
        		'labelAttributes' => array('icon' => 'fa-globe'),
        ))->setLabel("Paises");
        
        $menu->addChild('distributor', array(
        		'route' => 'odiseo_conagra_backend_distributor_index',
        		'labelAttributes' => array('icon' => 'fa-truck'),
        ))->setLabel("Distribuidores");
        
<<<<<<< HEAD
        $menu->addChild('translation', array(
        		'route' => 'odiseo_conagra_backend_translation_index',
        		'labelAttributes' => array('icon' => 'fa-language'),
        ))->setLabel("Traducciones");
        
=======
>>>>>>> branch 'master' of https://github.com/PabloGit88/conagra.git
        $menu->addChild('user', array(
        		'route' => 'odiseo_conagra_backend_user_index',
        		'labelAttributes' => array('icon' => 'fa-user'),
        ))->setLabel("Usuarios");
        
        $menu->addChild('trivia', array(
        		'route' => 'odiseo_conagra_backend_trivia_index',
        		'labelAttributes' => array('icon' => 'fa-question-circle'),
        ))->setLabel("Evaluación");
        
        return $menu;
    }
}
